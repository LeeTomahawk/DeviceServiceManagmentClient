interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  roleType: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  street: string;
  number: string;
  postCode: string;
}

export class RegisterUserDto {
  constructor(formRegister: FormValues) {
    this.email = formRegister.email;
    this.password = formRegister.password;
    this.confirmPassword = formRegister.confirmPassword;
    this.roleType = formRegister.roleType;
    this.firstName = formRegister.firstName;
    this.lastName = formRegister.lastName;
    this.phoneNumber = formRegister.phoneNumber;
    this.city = formRegister.city;
    this.street = formRegister.street;
    this.number = formRegister.number;
    this.postCode = formRegister.postCode;
  }
  email: string;
  password: string;
  confirmPassword: string;
  roleType: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  street: string;
  number: string;
  postCode: string;
}
