import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Workplace } from './WorkplaceInterface';
import { WorkplaceDeleteComponent } from './workplace-delete/workplace-delete.component';
import { WorkplaceInfoComponent } from './workplace-info/workplace-info.component';
import { WorkplaceUpdateComponent } from './workplace-update/workplace-update.component';
import { WorkplaceAddEquipmentComponent } from './workplace-add-equipment/workplace-add-equipment.component';
import { MatTableDataSource } from '@angular/material/table';
import { WorkplaceService } from 'src/Services/workplace.service';

@Component({
  selector: 'app-workplace-list',
  templateUrl: './workplace-list.component.html',
  styleUrls: ['./workplace-list.component.css'],
})
export class WorkplaceListComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'identifier',
    'info',
    'addeq',
    'update',
    'delete',
  ];
  workplaceList: any;
  dataSource = new MatTableDataSource<Workplace>();
  isLoading: boolean = true;
  constructor(
    private infoDialog: MatDialog,
    private addDialog: MatDialog,
    private updateDialog: MatDialog,
    private deleteDialog: MatDialog,
    private workplaceApiCaller: WorkplaceService
  ) {}

  ngOnInit(): void {
    this.getWorkplaceList();
  }

  getWorkplaceList() {
    this.workplaceApiCaller.getWorkplaceList().subscribe((data) => {
      console.log(data);
      this.workplaceList = data;
      this.dataSource = new MatTableDataSource<Workplace>(this.workplaceList);
      this.isLoading = false;
    });
  }

  openInfoDialog(element: Workplace) {
    const dialogRef = this.infoDialog.open(WorkplaceInfoComponent, {
      data: { element },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
  openAddDialog(id: string) {
    const dialogRef = this.addDialog.open(WorkplaceAddEquipmentComponent, {
      data: { workplaceId: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
  openUpdateDialog(element: Workplace) {
    const dialogRef = this.updateDialog.open(WorkplaceUpdateComponent, {
      data: { element },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
  openDeleteDialog(id: string) {
    const dialogRef = this.deleteDialog.open(WorkplaceDeleteComponent, {
      data: { workplaceId: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
}
