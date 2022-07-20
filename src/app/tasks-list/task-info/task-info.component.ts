import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tasks } from '../taskInterfaces';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.css'],
})
export class TaskInfoComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { task: Tasks }) {}
  dataSource: Tasks = this.data.task;
  ngOnInit(): void {}
}
