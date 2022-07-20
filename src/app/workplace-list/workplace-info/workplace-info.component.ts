import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-workplace-info',
  templateUrl: './workplace-info.component.html',
  styleUrls: ['./workplace-info.component.css'],
})
export class WorkplaceInfoComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { workplaceId: string }) {}

  ngOnInit(): void {}
}
