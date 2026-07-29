export interface User {
  id: string;
  name: string;
  age: number;
}

export interface SplitPromiseSettledResult<ValueType> {
  results: PromiseSettledResult<ValueType>[];
  fulfilled: PromiseFulfilledResult<ValueType>[];
  rejected: PromiseRejectedResult[];
}
