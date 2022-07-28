import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EquipmentService } from 'src/Services/equipment.service';
import { EquipmentDeleteComponent } from './equipment-delete/equipment-delete.component';
import { EquipmentUpdateComponent } from './equipment-update/equipment-update.component';
import { Equipment } from './equipmentInterface';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css'],
})
export class EquipmentListComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'description',
    'amount',
    'update',
    'delete',
  ];
  equipmentList: any;
  dataSource = new MatTableDataSource<Equipment>();
  isLoading: boolean = true;
  constructor(
    private updateDialog: MatDialog,
    private deleteDialog: MatDialog,
    private equipmentApiCallser: EquipmentService
  ) {}

  ngOnInit(): void {
    this.getEquipmentList();
  }

  getEquipmentList() {
    this.equipmentApiCallser.getEquipmentList().subscribe((data) => {
      this.equipmentList = data;
      this.dataSource = new MatTableDataSource<Equipment>(this.equipmentList);
      this.isLoading = false;
    });
  }

  openUpdateDialog(equipment: Equipment) {
    const dialogRef = this.updateDialog.open(EquipmentUpdateComponent, {
      data: { equipment },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
  openDeleteDialog(id: string) {
    const dialogRef = this.deleteDialog.open(EquipmentDeleteComponent, {
      data: { eqid: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
}
