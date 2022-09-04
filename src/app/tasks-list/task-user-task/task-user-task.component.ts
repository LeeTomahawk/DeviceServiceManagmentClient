import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/Services/auth.service';
import { EmployeeService } from 'src/Services/employee.service';
import { TaskDeleteComponent } from '../task-delete/task-delete.component';
import { TaskInfoComponent } from '../task-info/task-info.component';
import { TaskUpdateComponent } from '../task-update/task-update.component';
import { Tasks } from '../taskInterfaces';
import { EmployeeTask } from './EmployeeTask';

@Component({
  selector: 'app-task-user-task',
  templateUrl: './task-user-task.component.html',
  styleUrls: ['./task-user-task.component.css'],
})
export class TaskUserTaskComponent implements OnInit {
  taskList: any;
  dataSource = new MatTableDataSource<EmployeeTask>();
  displayedColumns: string[] = [
    'position',
    'name',
    'status',
    'data',
    // 'info',
    'actions',
  ];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement!: EmployeeTask | null;
  isLoading: boolean = true;
  constructor(
    private infoDialog: MatDialog,
    private updateDialog: MatDialog,
    private employeeApiCaller: EmployeeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getTaskList();
  }

  getTaskList() {
    this.employeeApiCaller
      .getUserTaskList(this.authService.getUserId())
      .subscribe(
        (data) => {
          this.taskList = data;
          this.dataSource = new MatTableDataSource<EmployeeTask>(
            this.taskList.tasks
          );
          if (this.taskList.tasks.length > 0) this.isLoading = false;
          else this.isLoading = true;
        },
        (error) => {
          console.log(error.error);
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
      this.getTaskList();
    });
  }
  taskStatusMap(value: string) {
    if (value == 'RECEIVED') return 'PRZYJĘTO';
    else if (value == 'WAITING_FOR_CLIENT') return 'OCZEKIWANIE NA ODBIÓR';
    else if (value == 'IN_REPAIR') return 'W NAPRAWIE';
    else if (value == 'REPAIRED') return 'NAPRAWIONE';
    else if (value == 'NOT_REPAIRED') return 'NIE NAPRAWIONE';
    else if (value == 'COLLECTED') return 'ODEBRANE';
    return value;
  }
}
