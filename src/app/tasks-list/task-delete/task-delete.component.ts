import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css'],
})
export class TaskDeleteComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { taskId: string }) {}

  ngOnInit(): void {}
}
