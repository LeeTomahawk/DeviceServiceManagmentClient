import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
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
    'LastName',
    'PhoneNumber',
    'actions',
  ];
  private employeeList: any;
  public dataSource!: MatTableDataSource<Employee>;
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
    private employeeApiCaller: EmployeeService
  ) {}

  ngOnInit(): void {
    const request: any = {};
    request.SearchPharse = this.SearchPharse;
    request.PageNumber = this.PageNumber;
    request.PageSize = this.PageSize;
    request.SortBy = this.SortBy;
    request.SortDirection = this.SortDirection;
    this.getEmployeeList(request);
  }

  applyFilter(event: Event) {
    this.SearchPharse = (event.target as HTMLInputElement).value;

    this.ngOnInit();
  }

  getEmployeeList(params: any) {
    this.employeeApiCaller.getEmployeeList(params).subscribe((data) => {
      this.employeeList = data.result;
      this.totalSize = data.totalResult;
      this.dataSource = new MatTableDataSource<Employee>(this.employeeList);
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

    this.getEmployeeList(request);
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

    this.getEmployeeList(request);
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
    //   const request: any = {};
    //   request.SearchPharse = this.SearchPharse;
    //   request.PageNumber = this.PageNumber;
    //   request.PageSize = this.PageSize;
    //   request.SortBy = this.SortBy;
    //   request.SortDirection = this.SortDirection;
    //   this.getEmployeeList(request);
    // });
  }

  openTasksDialog(employee: Employee) {
    // const dialogRef = this.tasksDialog.open(, {
    //   data: { employee },
    // });
  }
}
