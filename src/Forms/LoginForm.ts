import { FormControl, FormGroup, Validators } from '@angular/forms';

export class LoginForm extends FormGroup {
  constructor() {
    super({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{3,25}$'),
      ]),
    });
  }
}
