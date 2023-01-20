import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TaskListCalendarForm } from 'src/Forms/TaskListCalendarForm';
import { AuthService } from 'src/Services/auth.service';
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
    'Name',
    'TaskStatus',
    'startDate',
    'actions',
  ];
  taskList: any;
  dataSource!: MatTableDataSource<Task>;
  isLoading: boolean = true;
  totalSize: number = 0;
  SearchPharse: string = '';
  PageNumber: number = 1;
  PageSize: number = 25;
  SortBy: string = '';
  SortDirection: string = '';
  userRole!: any;
  data: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor(
    private infoDialog: MatDialog,
    private updateDialog: MatDialog,
    private deleteDialog: MatDialog,
    private taskApiCaller: TaskService,
    private authService: AuthService
  ) {
    this.endDate = new Date();
    this.startDate = new Date();
    this.endDate.setDate(this.endDate.getDate() + 1);
    this.startDate.setDate(this.endDate.getDate() - 7);
    this.form.get('startDate')?.setValue(this.startDate);
    this.form.get('endDate')?.setValue(this.endDate);
  }

  ngOnInit(): void {
    const request: any = {};
    request.SearchPharse = this.SearchPharse;
    request.PageNumber = this.PageNumber;
    request.PageSize = this.PageSize;
    request.SortBy = this.SortBy;
    request.SortDirection = this.SortDirection;

    this.getTaskList(request);

    this.data = localStorage.getItem('token');
    if (this.data) {
      this.userRole = this.authService.getRole();
    }
  }

  async getTaskList(params: any) {
    await this.taskApiCaller
      .getTaskList(
        this.form.get('startDate')?.value,
        this.form.get('endDate')?.value,
        params
      )
      .then((data) => {
        this.taskList = data.result;
        this.totalSize = data.totalResult;
        this.dataSource = new MatTableDataSource<Task>(this.taskList);
        this.dataSource.sort = this.empTbSort;
        if (this.totalSize > 0) this.isLoading = false;
        else this.isLoading = true;
      });
  }

  applyFilter(event: Event) {
    this.SearchPharse = (event.target as HTMLInputElement).value;

    this.ngOnInit();
  }

  async nextPage(event: PageEvent) {
    this.PageNumber = event.pageIndex + 1;
    this.PageSize = event.pageSize;

    const request: any = {};

    request.SearchPharse = this.SearchPharse;
    request.PageNumber = this.PageNumber;
    request.PageSize = this.PageSize;
    request.SortBy = this.SortBy;
    request.SortDirection = this.SortDirection;

    await this.getTaskList(request);
  }

  async onSortChanged(event: Sort) {
    this.SortBy = event.active;
    this.SortDirection = event.direction;

    const request: any = {};

    request.SearchPharse = this.SearchPharse;
    request.PageNumber = this.PageNumber;
    request.PageSize = this.PageSize;
    request.SortBy = this.SortBy;
    request.SortDirection = this.SortDirection;

    await this.getTaskList(request);
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
      const request: any = {};

      request.SearchPharse = this.SearchPharse;
      request.PageNumber = this.PageNumber;
      request.PageSize = this.PageSize;
      request.SortBy = this.SortBy;
      request.SortDirection = this.SortDirection;

      this.getTaskList(request);
    });
  }

  openDeleteDialog(id: string) {
    const dialogRef = this.deleteDialog.open(TaskDeleteComponent, {
      data: { taskId: id },
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

  taskStatusMap(value: string) {
    if (value == 'RECEIVED') return 'PRZYJĘTO';
    else if (value == 'WAITING_FOR_CLIENT') return 'OCZEKIWANIE NA ODBIÓR';
    else if (value == 'IN_REPAIR') return 'W NAPRAWIE';
    else if (value == 'REPAIRED') return 'NAPRAWIONE';
    else if (value == 'NOT_REPAIRED') return 'NIE NAPRAWIONE';
    else if (value == 'COLLECTED') return 'ODEBRANE';
    return value;
  }
}
