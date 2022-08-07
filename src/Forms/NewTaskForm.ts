import { FormControl, FormGroup, Validators } from '@angular/forms';

export class NewTaskForm extends FormGroup {
  constructor() {
    super({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      clientId: new FormControl(null, [Validators.required]),
      startDate: new FormControl(new Date(), [Validators.required]),
      taskStatus: new FormControl('RECEIVED', [Validators.required]),
    });
  }
}
