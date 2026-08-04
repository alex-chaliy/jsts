import { instancesData, instancesIds } from './data';
import { deleteInstances } from './delete-many-instances';

async function run() {
  console.log('instancesData : before : ', instancesData);
  console.log('\n--------------\n');

  const result = await deleteInstances(instancesIds, 5); // 5 reqs per second

  console.log('\n--------------\n');
  console.log('deleteInstances : result : ', result);
  console.log('\n--------------\n');
  console.log('result.fulfilled[0] : ', result.fulfilled[0]);
  console.log('result.rejected[0] : ', result.rejected[0]);

  console.log('\n--------------\n');
  console.log('instancesData : after : ', instancesData);
}

void run();
