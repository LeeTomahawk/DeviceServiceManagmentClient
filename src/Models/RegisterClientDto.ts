interface FormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  street: string;
  number: string;
  postCode: string;
}

export class RegisterClientDto {
  constructor(formRegister: FormValues) {
    this.firstName = formRegister.firstName;
    this.lastName = formRegister.lastName;
    this.phoneNumber = formRegister.phoneNumber;
    this.city = formRegister.city;
    this.street = formRegister.street;
    this.number = formRegister.number;
    this.postCode = formRegister.postCode;
  }
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  street: string;
  number: string;
  postCode: string;
}
