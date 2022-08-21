import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Workplace } from './WorkplaceInterface';
import { WorkplaceDeleteComponent } from './workplace-delete/workplace-delete.component';
import { WorkplaceUpdateComponent } from './workplace-update/workplace-update.component';
import { MatTableDataSource } from '@angular/material/table';
import { WorkplaceService } from 'src/Services/workplace.service';
import { EquipmentService } from 'src/Services/equipment.service';
import { WorkplaceAddComponent } from './workplace-add/workplace-add.component';

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
    'update',
    'delete',
  ];
  workplaceList: any;
  dataSource = new MatTableDataSource<Workplace>();
  isLoading: boolean = true;
  constructor(
    private updateDialog: MatDialog,
    private deleteDialog: MatDialog,
    private addDialog: MatDialog,
    private workplaceApiCaller: WorkplaceService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getWorkplaceList();
  }

  getWorkplaceList() {
    this.workplaceApiCaller.getWorkplaceList().subscribe(
      (data) => {
        console.log(data);
        this.workplaceList = data;
        this.dataSource = new MatTableDataSource<Workplace>(this.workplaceList);
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  openUpdateDialog(element: Workplace) {
    const dialogRef = this.updateDialog.open(WorkplaceUpdateComponent, {
      data: { element },
    });

    dialogRef.afterClosed().subscribe((x) => {
      this.ngOnInit();
    });
  }
  openDeleteDialog(id: string) {
    const dialogRef = this.deleteDialog.open(WorkplaceDeleteComponent, {
      data: { workplaceId: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      this.ngOnInit();
    });
  }

  openAddDialog() {
    const dialogRef = this.addDialog.open(WorkplaceAddComponent);

    dialogRef.afterClosed().subscribe((x) => {
      this.ngOnInit();
    });
  }
}
