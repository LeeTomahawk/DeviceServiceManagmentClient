import { Component, OnInit } from '@angular/core';
import { WokrplaceForm } from 'src/Forms/NewWorkplaceForm';
import { NewWorkplaceDto } from 'src/Models/NewWorkplaceDto';
import { WorkplaceService } from 'src/Services/workplace.service';

@Component({
  selector: 'app-workplace-add',
  templateUrl: './workplace-add.component.html',
  styleUrls: ['./workplace-add.component.css'],
})
export class WorkplaceAddComponent implements OnInit {
  newWorkplaceForm = new WokrplaceForm();
  constructor(private workpalceApiCaller: WorkplaceService) {}

  ngOnInit(): void {}

  add() {
    this.workpalceApiCaller
      .postWorkplace(new NewWorkplaceDto(this.newWorkplaceForm.value))
      .subscribe(() => console.log('add'));
  }
}
