export interface EmployeeTask {
  id: string;
  employmentDate: string;
  identiti: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: {
      city: string;
      street: string;
      number: string;
      postCode: string;
    };
  };
  taskCount: number;
  tasks: [
    {
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
        client: string;
      };
    }
  ];
}
