import { getUserId } from './promise-resolve';

async function run() {
  const result = await getUserId();
  console.log('getUserId : result : ', result);
}

void run();