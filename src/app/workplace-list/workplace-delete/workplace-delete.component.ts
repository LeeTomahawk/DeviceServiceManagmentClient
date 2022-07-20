import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-workplace-delete',
  templateUrl: './workplace-delete.component.html',
  styleUrls: ['./workplace-delete.component.css'],
})
export class WorkplaceDeleteComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { workplaceId: string }) {}

  ngOnInit(): void {}
}
