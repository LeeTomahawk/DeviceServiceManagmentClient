interface FormValues {
  id: string;
  name: string;
  description: string;
  amount: number;
}
export class UpdateEquipmentDto {
  constructor(formUpdate: FormValues) {
    this.id = formUpdate.id;
    this.name = formUpdate.name;
    this.description = formUpdate.description;
    this.amount = formUpdate.amount;
  }
  id: string;
  name: string;
  description: string;
  amount: number;
}
