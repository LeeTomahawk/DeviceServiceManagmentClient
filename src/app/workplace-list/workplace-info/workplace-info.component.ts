import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Workplace } from '../interface';

@Component({
  selector: 'app-workplace-info',
  templateUrl: './workplace-info.component.html',
  styleUrls: ['./workplace-info.component.css'],
})
export class WorkplaceInfoComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { element: Workplace }) {}
  displayedColumns: string[] = ['position', 'name', 'description', 'delete'];
  dataSource = this.data.element.equipments;
  ngOnInit(): void {}
}
