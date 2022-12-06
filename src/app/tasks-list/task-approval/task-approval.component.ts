import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ManagerService } from 'src/Services/manager.service';
import { TaskService } from 'src/Services/task.service';
import { TaskInfoComponent } from '../task-info/task-info.component';
import { TaskUpdateComponent } from '../task-update/task-update.component';
import { Tasks } from '../taskInterfaces';
import { ApprovalTask } from './ApprovalTask';

@Component({
  selector: 'app-task-approval',
  templateUrl: './task-approval.component.html',
  styleUrls: ['./task-approval.component.css'],
})
export class TaskApprovalComponent implements OnInit {
  taskList: any;
  dataSource = new MatTableDataSource<ApprovalTask>();
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
    private updateDialog: MatDialog,
    private taskApiCaller: TaskService,
    private managerApiCaller: ManagerService
  ) {}

  ngOnInit(): void {
    const request: any = {};
    request.SearchPharse = this.SearchPharse;
    request.PageNumber = this.PageNumber;
    request.PageSize = this.PageSize;
    request.SortBy = this.SortBy;
    request.SortDirection = this.SortDirection;

    this.getApprovalTasksList(request);
  }

  getApprovalTasksList(params: any) {
    this.taskApiCaller.getToAproveTasks(params).then(
      (data) => {
        this.taskList = data.result;
        this.totalSize = data.totalResult;
        this.dataSource = new MatTableDataSource<ApprovalTask>(this.taskList);
        this.dataSource.sort = this.empTbSort;
        if (this.taskList.length > 0) this.isLoading = false;
        else this.isLoading = true;
      },
      (err) => {
        console.log(err.error);
      }
    );
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

    this.getApprovalTasksList(request);
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

    this.getApprovalTasksList(request);
  }

  setTaskApproval(taskId: string) {
    this.managerApiCaller.setTaskToApproval(taskId).subscribe(
      (data) => {
        console.log('add');
        const request: any = {};

        request.SearchPharse = this.SearchPharse;
        request.PageNumber = this.PageNumber;
        request.PageSize = this.PageSize;
        request.SortBy = this.SortBy;
        request.SortDirection = this.SortDirection;

        this.getApprovalTasksList(request);
      },
      (err) => {
        console.log(err.error);
      }
    );
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

      this.getApprovalTasksList(request);
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
