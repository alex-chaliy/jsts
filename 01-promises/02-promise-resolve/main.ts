import { getUserId } from './promise-resolve';

const result = await getUserId();
console.log('getUserId : result : ', result);