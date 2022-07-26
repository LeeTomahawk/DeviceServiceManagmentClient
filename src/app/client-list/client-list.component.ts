import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientTasksComponent } from './client-tasks/client-tasks.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { Client } from './clientInterface';

const ELEMENT_DATA: Client[] = [
  {
    id: 'f83487e6-3b78-4b8c-86aa-08da6e1a7460',
    lastVisit: '2022-07-25',
    identiti: {
      firstName: 'string',
      lastName: 'string',
      phoneNumber: 'string',
      address: {
        city: 'string',
        street: 'string',
        number: 'string',
        postCode: 'string',
      },
    },
  },
];
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
  dataSource = ELEMENT_DATA;
  constructor(
    private infoDialog: MatDialog,
    private updateDialog: MatDialog,
    private tasksDialog: MatDialog
  ) {}

  ngOnInit(): void {}

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
