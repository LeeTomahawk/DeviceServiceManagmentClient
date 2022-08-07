import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ManagerService } from 'src/Services/manager.service';
import { Manager } from './managerInterface';

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
    // 'tasks',
    // 'info',
    'actions',
  ];
  dataSource = new MatTableDataSource<Manager>();
  managerList: any;
  isLoading: boolean = true;
  constructor(
    private infoDialog: MatDialog,
    private updateDialog: MatDialog,
    private tasksDialog: MatDialog,
    private managerApiCaller: ManagerService
  ) {}

  ngOnInit(): void {
    this.getManagerList();
  }

  getManagerList() {
    this.managerApiCaller.getManagerList().subscribe((data) => {
      this.managerList = data;
      this.dataSource = new MatTableDataSource<Manager>(this.managerList);
      this.isLoading = false;
    });
  }

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
