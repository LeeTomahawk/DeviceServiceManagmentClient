import { FormControl, FormGroup, Validators } from '@angular/forms';

export class SearchClientByPhoneNumber extends FormGroup {
  constructor() {
    super({
      phoneNumber: new FormControl('', [Validators.required]),
    });
  }
}
