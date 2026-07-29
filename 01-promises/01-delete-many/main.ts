import { userIds } from './data';
import { deleteUsers } from './delete-many';

/******************\
***** Run Test *****
\******************/

async function run() {
  const result = await deleteUsers(userIds, 0.5); // 0.5 reqs per sec = 1 request per 2 seconds
  console.log('\n\n-------------------------');
  console.log('deleteUsers : result : ', result);
  console.log('deleteUsers : result : rejected [0] . reason', result.rejected[0].reason);
  console.log('deleteUsers : result : fulfilled [0] . value', result.fulfilled[0].value);
}

void run();
