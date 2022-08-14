import { Client } from 'src/app/client-list/clientInterface';

export interface ApprovalTask {
  taskEmployeeId: string;
  task: {
    id: string;
    name: string;
    description: string;
    activities: string;
    startDate: string;
    endDate: string;
    amount: number;
    taskStatus: string;
    client: Client;
  };
}
