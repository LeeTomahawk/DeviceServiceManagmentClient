import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatPaginator,
  MatPaginatorIntl,
  PageEvent,
} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
    'name',
    'phoneNumber',
    'lastVisit',
    //'tasks',
    //'info',
    'actions',
  ];
  private clientList: any;
  public dataSource!: MatTableDataSource<Client>;
  isLoading: boolean = true;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  totalSize: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor(
    private infoDialog: MatDialog,
    private updateDialog: MatDialog,
    private tasksDialog: MatDialog,
    private clientApiCaller: ClientService
  ) {}

  ngOnInit(): void {
    this.getClientList({
      SearchPharse: '',
      PageNumber: 1,
      PageSize: 25,
      SortBy: '',
      SortDirection: '',
    });
  }

  getClientList(params: any) {
    this.clientApiCaller.getClientList(params).subscribe((data) => {
      console.log(params);
      this.clientList = data.result;
      this.totalSize = data.totalResult;
      this.dataSource = new MatTableDataSource<Client>(this.clientList);
      this.dataSource.sort = this.empTbSort;
      this.isLoading = false;
    });
  }

  nextPage(event: PageEvent) {
    const request: any = {};
    request.SearchPharse = '';
    request.PageNumber = (event.pageIndex + 1).toString();
    request.PageSize = event.pageSize.toString();
    request.SortBy = '';
    request.SortDirection = '';
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
      //this.getClientList();
    });
  }

  openTasksDialog(client: Client) {
    const dialogRef = this.tasksDialog.open(ClientTasksComponent, {
      data: { client },
    });
  }
}
