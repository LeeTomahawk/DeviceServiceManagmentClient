import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TaskListCalendarForm } from 'src/Forms/TaskListCalendarForm';
import { TaskService } from 'src/Services/task.service';
import { TaskDeleteComponent } from './task-delete/task-delete.component';
import { TaskInfoComponent } from './task-info/task-info.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { Tasks } from './taskInterfaces';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  endDate!: Date;
  startDate!: Date;
  form = new TaskListCalendarForm();
  displayedColumns: string[] = [
    'position',
    'name',
    'status',
    'data',
    'info',
    'update',
    'delete',
  ];
  taskList: any;
  dataSource!: MatTableDataSource<Task>;
  isLoading: boolean = true;
  constructor(
    private infoDialog: MatDialog,
    private updateDialog: MatDialog,
    private deleteDialog: MatDialog,
    private taskApiCaller: TaskService
  ) {
    this.endDate = new Date();
    this.startDate = new Date();
    this.startDate.setDate(this.endDate.getDate() - 7);
    this.form.get('startDate')?.setValue(this.startDate);
    this.form.get('endDate')?.setValue(this.endDate);
  }

  ngOnInit(): void {
    this.getTaskList();
  }

  async getTaskList() {
    await this.taskApiCaller
      .getTaskList(
        this.form.get('startDate')?.value,
        this.form.get('endDate')?.value
      )
      .then((data) => {
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

  openUpdateDialog(task: Tasks) {
    const dialogRef = this.updateDialog.open(TaskUpdateComponent, {
      data: { task },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }

  openDeleteDialog(id: string) {
    const dialogRef = this.deleteDialog.open(TaskDeleteComponent, {
      data: { taskId: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
}
