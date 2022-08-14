import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
    'actions',
  ];
  taskList: any;
  dataSource!: MatTableDataSource<Task>;
  isLoading: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor(
    private infoDialog: MatDialog,
    private updateDialog: MatDialog,
    private deleteDialog: MatDialog,
    private taskApiCaller: TaskService
  ) {
    this.endDate = new Date();
    this.startDate = new Date();
    this.endDate.setDate(this.endDate.getDate() + 1);
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
        if (this.taskList.length > 0) this.isLoading = false;
        else this.isLoading = true;
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
      this.getTaskList();
    });
  }

  openDeleteDialog(id: string) {
    const dialogRef = this.deleteDialog.open(TaskDeleteComponent, {
      data: { taskId: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      this.getTaskList();
    });
  }
}
