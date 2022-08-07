import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/Services/employee.service';
import { Employee } from './employeeInterface';

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
    // 'tasks',
    // 'info',
    'actions',
  ];
  private employeeList: any;
  public dataSource!: MatTableDataSource<Employee>;
  isLoading: boolean = true;
  constructor(
    private infoDialog: MatDialog,
    private updateDialog: MatDialog,
    private tasksDialog: MatDialog,
    private employeeApiCaller: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.employeeApiCaller.getEmployeeList().subscribe((data) => {
      this.employeeList = data;
      this.dataSource = new MatTableDataSource<Employee>(this.employeeList);
      this.isLoading = false;
    });
  }

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
