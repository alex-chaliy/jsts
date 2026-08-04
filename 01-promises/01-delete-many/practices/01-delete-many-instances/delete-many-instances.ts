import { instancesData } from './data';
import { Instance, SplitPromiseSettledResult, TimeRange } from './types';

const externalApi = {
  deleteInstance: function (instanceId: string): Promise<Instance> {
    return emitNetworkDelay(
      () => {
        console.log('externalApi : deleteInstance() called for id : ', instanceId);
        // mock reject for every 5th instance
        if (+instanceId % 5 === 0) {
          return Promise.reject({
            status: 500,
            Message: 'Internal Server Error',
            instanceId,
          });
        } else {
          const instanceIndex = instancesData.findIndex((i) => i.id === instanceId);
          const deletedInstance = instancesData.splice(instanceIndex, 1)[0];
          return Promise.resolve(deletedInstance);
        }
      },
      { minMS: 500, maxMS: 10000 }
    );
  },
};

async function deleteInstance(instanceId: string): Promise<Instance> {
  // console.log('deleteInstance() called for id : ', instanceId);
  const result = await externalApi.deleteInstance(instanceId);
  return result;
}

// reqsPerSecond - requests per second
export async function deleteInstances(
  instanceIds: string[],
  reqsPerSecond: number
): Promise<SplitPromiseSettledResult<Instance>> {
  if (!instanceIds || instanceIds?.length < 0) {
    return Promise.reject({ message: 'No instance ids provided' });
  }

  const delayToNext = 1000 / reqsPerSecond;
  const promisesArray: Promise<Instance>[] = [];

  instanceIds.forEach((instanceId, index) => {
    // +1 because we need N reqs per sec, but not N+1 reqs per sec
    const currentPromiseDelay = delayToNext * (index + 1);
    promisesArray.push(
      promiseDelay(() => deleteInstance(instanceId), currentPromiseDelay, instanceId)
    );
  });

  const results = await Promise.allSettled(promisesArray);
  return Promise.resolve({
    results,
    fulfilled: results.filter((r) => r.status === 'fulfilled'),
    rejected: results.filter((r) => r.status === 'rejected'),
  });
}

// Utils

function promiseDelay<T>(fn: () => Promise<T>, delayMS: number, id: string): Promise<T> {
  return new Promise<T>(async (resolve, reject) => {
    console.log('promiseDelay : deleteInstance() called for id : ', id);

    setTimeout(async () => {
      const [error, data] = await promiseSafe(fn());
      error ? reject(error) : resolve(data);
    }, delayMS);
  });
}

async function promiseSafe<T>(
  promise: Promise<T>
): Promise<[Error, undefined] | [undefined, T]> {
  try {
    const result = await promise;
    return [undefined, result];
  } catch (err) {
    return [err as Error, undefined];
  }
}

function emitNetworkDelay<T>(fn: () => Promise<T>, range: TimeRange): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    setTimeout(async () => {
      const [error, data] = await promiseSafe(fn());
      error ? reject(error) : resolve(data);
    }, getRandom(range.minMS, range.maxMS));
  });
}

function getRandom(min: number, max: number, digitsAfterDot = 0) {
  if (digitsAfterDot > 100 || digitsAfterDot < 0) {
    console.log(
      `getRandom : (${min}, ${max}, ${digitsAfterDot}) : digitsAfterDot is not between 100 and 0`
    );
    digitsAfterDot = 0;
    console.log(`digitsAfterDot was equaled to 0`);
  }
  return +(Math.random() * (max - min) + min).toFixed(digitsAfterDot);
}
