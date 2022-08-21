import { FormControl, FormGroup, Validators } from '@angular/forms';

export class WokrplaceForm extends FormGroup {
  constructor() {
    super({
      identifier: new FormControl(null, Validators.required),
    });
  }
}

export class WokrplaceUpdateForm extends FormGroup {
  constructor() {
    super({
      id: new FormControl(null, Validators.required),
      identifier: new FormControl(null, Validators.required),
    });
  }
}
