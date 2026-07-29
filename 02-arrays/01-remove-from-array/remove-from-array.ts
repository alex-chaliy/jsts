import { data } from './data';

export function removeFromArray(): string[] {
  data.pop(); // remove from the end
  data.shift(); // remove from the start
  return data;
}
