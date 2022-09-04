import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/Services/employee.service';
import { ManagerService } from 'src/Services/manager.service';
import { Tasks } from '../../taskInterfaces';

@Component({
  selector: 'app-task-assign',
  templateUrl: './task-assign.component.html',
  styleUrls: ['./task-assign.component.css'],
})
export class TaskAssignComponent implements OnInit {
  isLoading: boolean = true;
  employeeList: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { task: Tasks },
    private employeeApiCaller: EmployeeService,
    private managerApiCaller: ManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.getEmployeeList();
  }

  getEmployeeList(params: any) {
    this.employeeApiCaller.getEmployeeList(params).subscribe((data) => {
      this.employeeList = data;
      if (data != null) this.isLoading = false;
    });
  }

  addNewTask(employeeId: string) {
    this.managerApiCaller
      .addTaskToEmployee(this.data.task.id, employeeId)
      .subscribe(
        (x) => {
          console.log('add');
          this.router.navigate(['/tasks-available']).finally(() => {
            window.location.reload();
          });
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
