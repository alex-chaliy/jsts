import { Instance } from './types'

export const instancesData: Instance[] = [
  { id: '1', name: 'G-C User Aggr Service', type: 'g-cloud' },
  { id: '2', name: 'AWS User Manage Service', type: 'aws' },
  { id: '3', name: 'Azure Products Aggr Service', type: 'ms-azure' },
  { id: '4', name: 'AWS Ppoducts Manage Service', type: 'aws' },
  { id: '5', name: 'G-C Posts Aggr Service', type: 'g-cloud' },
  { id: '6', name: 'Azure Suppliers Manage Service', type: 'ms-azure' },
  { id: '7', name: 'Azure Consumers Aggr Service', type: 'ms-azure' },
  { id: '8', name: 'AWS User Manage Service', type: 'aws' },
  { id: '9', name: 'G-C Consumers Aggr Service', type: 'g-cloud' },
  { id: '10', name: 'AWS User Manage Service', type: 'aws' },
  { id: '11', name: 'G-C Suppliers Aggr Service', type: 'g-cloud' },
  { id: '12', name: 'G-C Ppoducts Manage Service', type: 'g-cloud' },
  { id: '13', name: 'AWS User Aggr Service', type: 'aws' },
  { id: '14', name: 'Azure User Manage Service', type: 'ms-azure' },
  { id: '15', name: 'Azure Ppoducts Aggr Service', type: 'ms-azure' },
  { id: '16', name: 'AWS User Manage Service', type: 'aws' },
  { id: '17', name: 'Azure User Aggr Service', type: 'ms-azure' },
  { id: '18', name: 'G-C Ppoducts Manage Service', type: 'g-cloud' },
  { id: '19', name: 'AWS Products Aggr Service', type: 'aws' },
  { id: '20', name: 'Azure Ppoducts Manage Service', type: 'ms-azure' },
  { id: '21', name: 'G-C Posts Manage Service', type: 'g-cloud' },
];

export const instancesIds = instancesData.map(i => i.id);
