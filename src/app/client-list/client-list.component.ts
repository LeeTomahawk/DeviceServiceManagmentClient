import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
    'tasks',
    'info',
    'update',
  ];
  private clientList: any;
  public dataSource!: MatTableDataSource<Client>;
  isLoading: boolean = true;
  constructor(
    private infoDialog: MatDialog,
    private updateDialog: MatDialog,
    private tasksDialog: MatDialog,
    private clientApiCaller: ClientService
  ) {}

  ngOnInit(): void {
    this.getClientList();
  }

  getClientList() {
    this.clientApiCaller.getClientList().subscribe((data: Client) => {
      this.clientList = data;
      this.dataSource = new MatTableDataSource<Client>(this.clientList);
      this.isLoading = false;
    });
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
      window.location.reload();
    });
  }

  openTasksDialog(client: Client) {
    const dialogRef = this.tasksDialog.open(ClientTasksComponent, {
      data: { client },
    });
  }
}
