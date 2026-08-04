// Description:
// Imagine we have an external API that provides deleteUser() method,
// it doesn't provide deleteUsers() method,
// but we need to delete 21 users with one operation.
// So we need to make 21 requests.
// [!] But also the external API has limit 10 requests per second.

import { userIds, users } from './data';
import { SplitPromiseSettledResult, User } from './types';

// mocked external API with function for deleting user
const externalAPI = {
  deleteUser: async function (userId: string): Promise<User> {
    const userIndex: number = users.findIndex((u) => u.id === userId);
    const user: User = users.splice(userIndex, 1)[0];
    return user;
  },
};

function deleteUser(userId: string): Promise<User> {
  return new Promise(async (resolve, reject) => {
    // mocked reject: it rejects every forth user
    if (+userId % 4 === 0) {
      console.log(`id [${userId}] : deletete user : rejected`); // test
      reject({ status: 500, message: 'Internal Server Error', userId });
    } else {
      const user = await externalAPI.deleteUser(userId);
      console.log(`id [${userId}] : deletete user : fulfilled`); // test
      resolve(user);
    }
  });
}

export async function deleteUsers(
  userIds: string[],
  reqsPerSecond: number
): Promise<SplitPromiseSettledResult<User>> {
  if (!userIds || userIds?.length < 0) {
    return Promise.reject({ message: 'No user ids provided' });
  }

  const delayBetween = 1000 / reqsPerSecond;
  const promises: Promise<User>[] = [];

  userIds.forEach((userId, i) => {
    const currentPromiseDelay = (i + 1) * delayBetween;
    promises.push(
      promiseDelay(() => deleteUser(userId), currentPromiseDelay)
    );
  });
  const results = await Promise.allSettled(promises);

  return Promise.resolve({
    results, 
    fulfilled: results.filter(r => r.status === 'fulfilled'),
    rejected: results.filter(r => r.status === 'rejected')
  });
}

function promiseDelay<T>(fn: () => Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const [error, data] = await safe<T>(fn());
      error ? reject(error) : resolve(data);
    }, ms);
  });
}

async function safe<T>(
  promise: Promise<T>
): Promise<[Error, undefined] | [undefined, T]> {
  try {
    const result = await promise;
    return [undefined, result];
  } catch (err) {
    return [err as Error, undefined];
  }
}
