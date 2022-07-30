import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkplaceService } from 'src/Services/workplace.service';

@Component({
  selector: 'app-workplace-delete',
  templateUrl: './workplace-delete.component.html',
  styleUrls: ['./workplace-delete.component.css'],
})
export class WorkplaceDeleteComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { workplaceId: string },
    private workplaceApiCaller: WorkplaceService
  ) {}

  ngOnInit(): void {}

  delete() {
    this.workplaceApiCaller
      .deleteWorkplace(this.data.workplaceId)
      .subscribe((x) => {});
  }
}
