import { Client } from 'src/app/client-list/clientInterface';
interface FormValues {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  street: string;
  number: string;
  postCode: string;
}
export class UpdateClientDto {
  constructor(formRegister: FormValues) {
    this.id = formRegister.id;
    this.firstName = formRegister.firstName;
    this.lastName = formRegister.lastName;
    this.phoneNumber = formRegister.phoneNumber;
    this.city = formRegister.city;
    this.street = formRegister.street;
    this.number = formRegister.number;
    this.postCode = formRegister.postCode;
  }
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  street: string;
  number: string;
  postCode: string;
}
