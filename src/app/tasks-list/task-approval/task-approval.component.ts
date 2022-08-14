import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ManagerService } from 'src/Services/manager.service';
import { TaskService } from 'src/Services/task.service';
import { TaskInfoComponent } from '../task-info/task-info.component';
import { TaskUpdateComponent } from '../task-update/task-update.component';
import { Tasks } from '../taskInterfaces';
import { ApprovalTask } from './ApprovalTask';

@Component({
  selector: 'app-task-approval',
  templateUrl: './task-approval.component.html',
  styleUrls: ['./task-approval.component.css'],
})
export class TaskApprovalComponent implements OnInit {
  taskList: any;
  dataSource = new MatTableDataSource<ApprovalTask>();
  displayedColumns: string[] = [
    'position',
    'name',
    'status',
    'data',
    'actions',
  ];
  isLoading: boolean = true;
  constructor(
    private infoDialog: MatDialog,
    private updateDialog: MatDialog,
    private taskApiCaller: TaskService,
    private managerApiCaller: ManagerService
  ) {}

  ngOnInit(): void {
    this.getApprovalTasksList();
  }

  getApprovalTasksList() {
    this.taskApiCaller.getToAproveTasks().then(
      (data) => {
        this.taskList = data;
        this.dataSource = new MatTableDataSource<ApprovalTask>(this.taskList);
        console.log(this.taskList);
        if (this.taskList.length > 0) this.isLoading = false;
        else this.isLoading = true;
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  setTaskApproval(taskId: string) {
    this.managerApiCaller.setTaskToApproval(taskId).subscribe(
      (data) => {
        console.log('add');
        this.getApprovalTasksList();
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  openInfoDialog(task: Tasks) {
    const dialogRef = this.infoDialog.open(TaskInfoComponent, {
      data: { task },
    });
  }

  openUpdateDialog(task: Tasks) {
    const dialogRef = this.updateDialog.open(TaskUpdateComponent, {
      data: { task },
    });

    dialogRef.afterClosed().subscribe((x) => {
      //
    });
  }
}
