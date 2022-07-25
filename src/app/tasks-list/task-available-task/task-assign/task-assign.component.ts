import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tasks } from '../../taskInterfaces';

@Component({
  selector: 'app-task-assign',
  templateUrl: './task-assign.component.html',
  styleUrls: ['./task-assign.component.css'],
})
export class TaskAssignComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { task: Tasks }) {}

  ngOnInit(): void {}
}
