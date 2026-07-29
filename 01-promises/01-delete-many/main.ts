import { userIds } from './data';
import { deleteUsers } from './delete-many';

/******************\
***** Run Test *****
\******************/

const result = await deleteUsers(userIds, 0.5);
console.log('\n\n-------------------------');
console.log('deleteUsers : result : ', result);
