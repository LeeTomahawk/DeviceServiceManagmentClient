import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ManagerService } from 'src/Services/manager.service';
import { ClientUpdateComponent } from '../client-list/client-update/client-update.component';
import { Manager } from './managerInterface';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css'],
})
export class ManagerListComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'LastName',
    'PhoneNumber',
    'actions',
  ];
  dataSource = new MatTableDataSource<Manager>();
  managerList: any;
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
    private tasksDialog: MatDialog,
    private managerApiCaller: ManagerService
  ) {}

  ngOnInit(): void {
    const request: any = {};
    request.SearchPharse = this.SearchPharse;
    request.PageNumber = this.PageNumber;
    request.PageSize = this.PageSize;
    request.SortBy = this.SortBy;
    request.SortDirection = this.SortDirection;
    this.getManagerList(request);
  }

  applyFilter(event: Event) {
    this.SearchPharse = (event.target as HTMLInputElement).value;

    this.ngOnInit();
  }

  getManagerList(params: any) {
    this.managerApiCaller.getManagerList(params).subscribe((data) => {
      this.managerList = data.result;
      this.totalSize = data.totalResult;
      this.dataSource = new MatTableDataSource<Manager>(this.managerList);
      this.dataSource.sort = this.empTbSort;
      this.isLoading = false;
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

    this.getManagerList(request);
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

    this.getManagerList(request);
  }

  openInfoDialog(manager: Manager) {
    // const dialogRef = this.infoDialog.open(, {
    //   data: { manager },
    // });
  }

  openUpdateDialog(manager: Manager) {
    const dialogRef = this.updateDialog.open(ClientUpdateComponent, {
      data: { manager },
    });

    dialogRef.afterClosed().subscribe((x) => {
      const request: any = {};

      request.SearchPharse = this.SearchPharse;
      request.PageNumber = this.PageNumber;
      request.PageSize = this.PageSize;
      request.SortBy = this.SortBy;
      request.SortDirection = this.SortDirection;

      this.getManagerList(request);
    });
  }

  openTasksDialog(manager: Manager) {
    // const dialogRef = this.tasksDialog.open(, {
    //   data: { manager },
    // });
  }
}
