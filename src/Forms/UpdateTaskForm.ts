import { FormControl, FormGroup, Validators } from '@angular/forms';

export class UpdateTaskForm extends FormGroup {
  constructor() {
    super({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      activities: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, []),
      amount: new FormControl(null, [Validators.required, Validators.min(1)]),
      taskStatus: new FormControl(null, [Validators.required]),
    });
  }
}
