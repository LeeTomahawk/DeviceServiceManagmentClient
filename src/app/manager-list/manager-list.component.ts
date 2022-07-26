import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Manager } from './managerInterface';
const ELEMENT_DATA: Manager[] = [
  {
    id: 'f83487e6-3b78-4b8c-86aa-08da6e1a7460',
    employmentDate: '2022-07-25',
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
  {
    id: 'f83487e6-3b78-4b8c-86aa-08da6e1a7460',
    employmentDate: '2022-07-25',
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
  {
    id: 'f83487e6-3b78-4b8c-86aa-08da6e1a7460',
    employmentDate: '2022-07-25',
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
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css'],
})
export class ManagerListComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'phoneNumber',
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

  openInfoDialog(manager: Manager) {
    // const dialogRef = this.infoDialog.open(, {
    //   data: { manager },
    // });
  }

  openUpdateDialog(manager: Manager) {
    // const dialogRef = this.updateDialog.open(, {
    //   data: { manager },
    // });
    // dialogRef.afterClosed().subscribe((x) => {
    //   window.location.reload();
    // });
  }

  openTasksDialog(manager: Manager) {
    // const dialogRef = this.tasksDialog.open(, {
    //   data: { manager },
    // });
  }
}
