interface FormValues {
  name: string;
  description: string;
  clientId: string;
  startDate: Date;
  taskStatus: string;
}

export class RegisterNewTask {
  constructor(formRegister: FormValues) {
    this.name = formRegister.name;
    this.description = formRegister.description;
    this.clientId = formRegister.clientId;
    this.startDate = formRegister.startDate;
    this.taskStatus = formRegister.taskStatus;
  }
  name: string;
  description: string;
  clientId: string;
  startDate: Date;
  taskStatus: string;
}
