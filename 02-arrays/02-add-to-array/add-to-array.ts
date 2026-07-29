import { data } from './data';

export function addToArray(): string[] {
  data.push('A'); // add to the end
  data.unshift('B'); // add to the start
  return data;
}
