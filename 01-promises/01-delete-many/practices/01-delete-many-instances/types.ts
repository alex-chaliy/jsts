export interface Instance {
  id: string;
  type: 'aws' | 'g-cloud' | 'ms-azure';
  name: string;
}

export interface SplitPromiseSettledResult<ValueType> {
  results: PromiseSettledResult<ValueType>[];
  fulfilled: PromiseFulfilledResult<ValueType>[];
  rejected: PromiseRejectedResult[];
}

export interface InstanceError {
  status: number;
  message: string;
  instanceId: string;
}

/**
 * @minMS - miliseconds
 * @maxMS - miliseconds
 */
export interface TimeRange {
  minMS: number;
  maxMS: number;
}
