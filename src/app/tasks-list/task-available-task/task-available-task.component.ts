import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { empty } from 'rxjs';
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
    'Name',
    'TaskStatus',
    'startDate',
    'actions',
  ];
  isLoading: boolean = true;
  totalSize: number = 0;
  SearchPharse: string = '';
  PageNumber: number = 1;
  PageSize: number = 25;
  SortBy: string = '';
  SortDirection: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor(
    private infoDialog: MatDialog,
    private assignDialog: MatDialog,
    private taskApiCaller: TaskService
  ) {}

  ngOnInit(): void {
    const request: any = {};
    request.SearchPharse = this.SearchPharse;
    request.PageNumber = this.PageNumber;
    request.PageSize = this.PageSize;
    request.SortBy = this.SortBy;
    request.SortDirection = this.SortDirection;

    this.getTaskList(request);
  }

  async getTaskList(params: any) {
    await this.taskApiCaller.getAvailableTasksList(params).then((data) => {
      this.taskList = data.result;
      this.totalSize = data.totalResult;
      this.dataSource = new MatTableDataSource<Task>(this.taskList);
      this.dataSource.sort = this.empTbSort;
      if (this.taskList.length > 0) this.isLoading = false;
      else this.isLoading = true;
    });
  }

  nextPage(event: PageEvent) {
    this.PageNumber = event.pageIndex + 1;
    this.PageSize = event.pageSize;

    const request: any = {};

    request.SearchPharse = this.SearchPharse;
    request.PageNumber = this.PageNumber;
    request.PageSize = this.PageSize;
    request.SortBy = this.SortBy;
    request.SortDirection = this.SortDirection;

    this.getTaskList(request);
  }

  onSortChanged(event: Sort) {
    this.SortBy = event.active;
    this.SortDirection = event.direction;

    const request: any = {};

    request.SearchPharse = this.SearchPharse;
    request.PageNumber = this.PageNumber;
    request.PageSize = this.PageSize;
    request.SortBy = this.SortBy;
    request.SortDirection = this.SortDirection;

    this.getTaskList(request);
  }

  openInfoDialog(task: Tasks) {
    const dialogRef = this.infoDialog.open(TaskInfoComponent, {
      data: { task },
    });
  }

  openAssignDialog(task: Tasks) {
    const dialogRef = this.assignDialog.open(TaskAssignComponent, {
      data: { task },
    });

    dialogRef.afterClosed().subscribe((x) => {
      const request: any = {};

      request.SearchPharse = this.SearchPharse;
      request.PageNumber = this.PageNumber;
      request.PageSize = this.PageSize;
      request.SortBy = this.SortBy;
      request.SortDirection = this.SortDirection;

      this.getTaskList(request);
    });
  }
}
