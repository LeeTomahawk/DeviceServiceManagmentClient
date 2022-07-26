import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from './EmployeeInterface';
const ELEMENT_DATA: Employee[] = [
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
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
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

  openInfoDialog(employee: Employee) {
    // const dialogRef = this.infoDialog.open(, {
    //   data: { employee },
    // });
  }

  openUpdateDialog(employee: Employee) {
    // const dialogRef = this.updateDialog.open(, {
    //   data: { employee },
    // });
    // dialogRef.afterClosed().subscribe((x) => {
    //   window.location.reload();
    // });
  }

  openTasksDialog(employee: Employee) {
    // const dialogRef = this.tasksDialog.open(, {
    //   data: { employee },
    // });
  }
}
