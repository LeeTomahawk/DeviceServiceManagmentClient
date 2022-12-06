import { FormControl, FormGroup, Validators } from '@angular/forms';

export class UpdateEquipmentForm extends FormGroup {
  constructor() {
    super({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required, Validators.min(1)]),
    });
  }
}
