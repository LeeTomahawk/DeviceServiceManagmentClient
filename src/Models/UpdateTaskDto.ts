interface FormValues {
  id: string;
  name: string;
  description: string;
  activities: string;
  startDate: Date;
  endDate: Date;
  amount: number;
  taskStatus: string;
}

export class UpdateTaskDto {
  constructor(formUpdate: FormValues) {
    this.id = formUpdate.id;
    this.name = formUpdate.name;
    this.description = formUpdate.description;
    this.activities = formUpdate.activities;
    this.startDate = formUpdate.startDate;
    this.endDate = formUpdate.endDate;
    this.amount = formUpdate.amount;
    this.taskStatus = formUpdate.taskStatus;
  }
  id: string;
  name: string;
  description: string;
  activities: string;
  startDate: Date;
  endDate: Date;
  amount: number;
  taskStatus: string;
}
