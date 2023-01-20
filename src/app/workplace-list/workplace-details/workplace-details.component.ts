import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';
import { WorkplaceService } from 'src/Services/workplace.service';
import { Equipment, Workplace } from '../WorkplaceInterface';
import { WorklplaceAddEmployeeComponent } from './worklplace-add-employee/worklplace-add-employee.component';
import { WorkplaceAddEquipmentComponent } from './workplace-add-equipment/workplace-add-equipment.component';

@Component({
  selector: 'app-workplace-details',
  templateUrl: './workplace-details.component.html',
  styleUrls: ['./workplace-details.component.css'],
})
export class WorkplaceDetailsComponent implements OnInit {
  id!: string;
  workplaceEquipment: any;
  wokrplaceEmployee: any;
  displayedColumns: string[] = ['position', 'name', 'description', 'delete'];
  userRole!: any;
  data: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workplaceApiCaller: WorkplaceService,
    private addEquipmentDialog: MatDialog,
    private addEmployeeDialog: MatDialog,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.id = p['id'];
    });
    this.getDetails();
    this.data = localStorage.getItem('token');
    if (this.data) {
      this.userRole = this.authService.getRole();
    }
  }

  getDetails() {
    this.workplaceApiCaller.getWorkplace(this.id).subscribe((data) => {
      this.workplaceEquipment = data;
    });
    this.workplaceApiCaller
      .getEmployeeWithWorkplace(this.id)
      .subscribe((data) => {
        this.wokrplaceEmployee = data;
      });
  }

  delete(eqId: string) {
    this.workplaceApiCaller.deleteWokrplaceEquipment(eqId).subscribe((x) => {
      this.ngOnInit();
    });
  }

  openAddEquipmentDialog(element: Workplace) {
    const dialogRef = this.addEquipmentDialog.open(
      WorkplaceAddEquipmentComponent,
      {
        data: { element },
      }
    );

    dialogRef.afterClosed().subscribe((x) => {
      this.ngOnInit();
    });
  }

  openAddEmployeeDialog(workplaceId: string) {
    const dialogRef = this.addEmployeeDialog.open(
      WorklplaceAddEmployeeComponent,
      {
        data: { workplaceId },
      }
    );

    dialogRef.afterClosed().subscribe((x) => {
      this.ngOnInit();
    });
  }
}
