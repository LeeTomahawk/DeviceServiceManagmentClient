import { FormControl, FormGroup, Validators } from '@angular/forms';

export class NewEquipmentForm extends FormGroup {
  constructor() {
    super({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
    });
  }
}
