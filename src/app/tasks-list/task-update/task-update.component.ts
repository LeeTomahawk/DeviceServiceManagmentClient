import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tasks } from '../taskInterfaces';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css'],
})
export class TaskUpdateComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { task: Tasks }) {}
  ngOnInit(): void {}

  formatDate(data: string) {
    return new Date(data);
  }
}
