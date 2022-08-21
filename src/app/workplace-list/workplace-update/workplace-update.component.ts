import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WokrplaceUpdateForm } from 'src/Forms/NewWorkplaceForm';
import { UpdateWorkplaceDto } from 'src/Models/NewWorkplaceDto';
import { WorkplaceService } from 'src/Services/workplace.service';
import { Workplace } from '../WorkplaceInterface';

@Component({
  selector: 'app-workplace-update',
  templateUrl: './workplace-update.component.html',
  styleUrls: ['./workplace-update.component.css'],
})
export class WorkplaceUpdateComponent implements OnInit {
  wokplaceFrom = new WokrplaceUpdateForm();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { element: Workplace },
    private wokrplaceApiCaller: WorkplaceService
  ) {}

  ngOnInit(): void {
    this.wokplaceFrom.controls['identifier'].setValue(
      this.data.element.identifier
    );
    this.wokplaceFrom.controls['id'].setValue(this.data.element.id);
  }

  put() {
    this.wokrplaceApiCaller
      .putWorkplace(new UpdateWorkplaceDto(this.wokplaceFrom.value))
      .subscribe(() => console.log('add'));
  }
}
