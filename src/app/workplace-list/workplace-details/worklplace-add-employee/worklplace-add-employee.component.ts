import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkplaceService } from 'src/Services/workplace.service';

@Component({
  selector: 'app-worklplace-add-employee',
  templateUrl: './worklplace-add-employee.component.html',
  styleUrls: ['./worklplace-add-employee.component.css'],
})
export class WorklplaceAddEmployeeComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { workplaceId: string },
    private workplaceApiCaller: WorkplaceService
  ) {}

  employeeList: any;

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.workplaceApiCaller.getEmployeeWithoutWorkplace().subscribe((data) => {
      this.employeeList = data;
    });
  }

  addEmployee(eid: string) {
    this.workplaceApiCaller
      .addEmployeeToWorkplace(this.data.workplaceId, eid)
      .subscribe(
        (x) => {
          console.log('add');
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
