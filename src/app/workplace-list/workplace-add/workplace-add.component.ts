import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-workplace-add',
  templateUrl: './workplace-add.component.html',
  styleUrls: ['./workplace-add.component.css'],
})
export class WorkplaceAddComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { workplaceId: string }) {}

  ngOnInit(): void {}
}
