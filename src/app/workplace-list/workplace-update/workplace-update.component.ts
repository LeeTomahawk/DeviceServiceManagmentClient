import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Workplace } from '../WorkplaceInterface';

@Component({
  selector: 'app-workplace-update',
  templateUrl: './workplace-update.component.html',
  styleUrls: ['./workplace-update.component.css'],
})
export class WorkplaceUpdateComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { element: Workplace }) {}

  ngOnInit(): void {}
}
