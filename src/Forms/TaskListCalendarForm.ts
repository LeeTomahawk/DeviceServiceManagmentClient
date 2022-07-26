import { FormControl, FormGroup, Validators } from '@angular/forms';

export class TaskListCalendarForm extends FormGroup {
  constructor() {
    super({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
    });
  }
}
