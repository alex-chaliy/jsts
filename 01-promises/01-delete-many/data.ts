import { User } from './types';

export const users: User[] = [
  { id: '1', name: 'A', age: 15 },
  { id: '2', name: 'B', age: 17 },
  { id: '3', name: 'C', age: 5 },
  { id: '4', name: 'E', age: 32 },
  { id: '5', name: 'F', age: 5 },
  { id: '6', name: 'G', age: 11 },
  { id: '7', name: 'H', age: 12 },
  { id: '8', name: 'I', age: 5 },
  { id: '9', name: 'J', age: 16 },
  { id: '10', name: 'L', age: 32 },
  { id: '11', name: 'M', age: 7 },
  { id: '12', name: 'N', age: 18 },
  { id: '13', name: 'O', age: 32 },
  { id: '14', name: 'P', age: 15 },
  { id: '15', name: 'Q', age: 51 },
  { id: '16', name: 'R', age: 5 },
  { id: '17', name: 'S', age: 32 },
  { id: '18', name: 'T', age: 6 },
  { id: '19', name: 'U', age: 10 },
  { id: '20', name: 'V', age: 10 },
  { id: '21', name: 'W', age: 15 },
];

export const userIds: string[] = users.map(u => u.id);