interface FormValues {
  name: string;
  description: string;
  amount: number;
}

export class AddNewEquipmentDto {
  constructor(formRegister: FormValues) {
    this.name = formRegister.name;
    this.description = formRegister.description;
    this.amount = formRegister.amount;
  }
  name: string;
  description: string;
  amount: number;
}
