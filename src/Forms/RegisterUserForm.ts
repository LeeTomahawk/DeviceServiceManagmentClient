import { FormControl, FormGroup, Validators } from '@angular/forms';

export class RegisterUserForm extends FormGroup {
  constructor() {
    super({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9A-Za-z/]{6,50}$'),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9A-Za-z/]{6,50}$'),
      ]),
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]{3,15}$'),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]{3,25}$'),
      ]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{9,9}$'),
      ]),
      city: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]{3,15}$'),
      ]),
      street: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]{3,15}$'),
      ]),
      number: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9A-Za-z/]{1,999}$'),
      ]),
      postCode: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9-]{6,6}$'),
      ]),
      roleType: new FormControl(null),
    });
  }
}
