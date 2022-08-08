import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from 'src/Services/task.service';
import { TaskInfoComponent } from '../task-info/task-info.component';
import { Tasks } from '../taskInterfaces';
import { TaskAssignComponent } from './task-assign/task-assign.component';

@Component({
  selector: 'app-task-available-task',
  templateUrl: './task-available-task.component.html',
  styleUrls: ['./task-available-task.component.css'],
})
export class TaskAvailableTaskComponent implements OnInit {
  taskList: any;
  dataSource!: MatTableDataSource<Task>;
  displayedColumns: string[] = [
    'position',
    'name',
    'status',
    'data',
    // 'info',
    'actions',
  ];
  isLoading: boolean = true;
  constructor(
    private infoDialog: MatDialog,
    private assignDialog: MatDialog,
    private taskApiCaller: TaskService
  ) {}

  ngOnInit(): void {
    this.getTaskList();
  }

  async getTaskList() {
    await this.taskApiCaller.getAvailableTasksList().then((data) => {
      this.taskList = data;
      this.dataSource = new MatTableDataSource<Task>(this.taskList);
      this.isLoading = false;
    });
  }

  openInfoDialog(task: Tasks) {
    const dialogRef = this.infoDialog.open(TaskInfoComponent, {
      data: { task },
    });
  }

  openAssignDialog(task: Tasks) {
    const dialogRef = this.infoDialog.open(TaskAssignComponent, {
      data: { task },
    });

    dialogRef.afterClosed().subscribe((x) => {
      this.getTaskList();
    });
  }
}
