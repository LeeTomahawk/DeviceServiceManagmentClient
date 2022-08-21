import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatPaginator,
  MatPaginatorIntl,
  PageEvent,
} from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from 'src/Services/client.service';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientTasksComponent } from './client-tasks/client-tasks.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { Client } from './clientInterface';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'LastName',
    'PhoneNumber',
    'lastVisit',
    'actions',
  ];
  private clientList: any;
  public dataSource!: MatTableDataSource<Client>;
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
    private clientApiCaller: ClientService
  ) {}

  ngOnInit(): void {
    const request: any = {};
    request.SearchPharse = this.SearchPharse;
    request.PageNumber = this.PageNumber;
    request.PageSize = this.PageSize;
    request.SortBy = this.SortBy;
    request.SortDirection = this.SortDirection;
    this.getClientList(request);
  }

  getClientList(params: any) {
    this.clientApiCaller.getClientList(params).subscribe((data) => {
      this.clientList = data.result;
      this.totalSize = data.totalResult;
      this.dataSource = new MatTableDataSource<Client>(this.clientList);
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

    this.getClientList(request);
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

    this.getClientList(request);
  }

  openInfoDialog(client: Client) {
    const dialogRef = this.infoDialog.open(ClientInfoComponent, {
      data: { client },
    });
  }

  openUpdateDialog(client: Client) {
    const dialogRef = this.updateDialog.open(ClientUpdateComponent, {
      data: { client },
    });

    dialogRef.afterClosed().subscribe((x) => {
      const request: any = {};

      request.SearchPharse = this.SearchPharse;
      request.PageNumber = this.PageNumber;
      request.PageSize = this.PageSize;
      request.SortBy = this.SortBy;
      request.SortDirection = this.SortDirection;

      this.getClientList(request);
    });
  }

  openTasksDialog(clientId: string) {
    const dialogRef = this.tasksDialog.open(ClientTasksComponent, {
      data: { clientId },
    });
  }
}
