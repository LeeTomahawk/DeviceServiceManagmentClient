import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EquipmentDeleteComponent } from './equipment-delete/equipment-delete.component';
import { EquipmentUpdateComponent } from './equipment-update/equipment-update.component';
import { Equipment } from './equipmentInterface';

const ELEMENT_DATA: Equipment[] = [
  {
    id: '7eaadf92-33e5-48b8-bb4a-3cfa93696f81',
    name: 'test',
    description: 'test',
    amount: 10,
  },
  {
    id: '7eaadf92-33e5-48b8-bb4a-3cfa93696f81',
    name: 'test',
    description: 'test',
    amount: 10,
  },
  {
    id: '7eaadf92-33e5-48b8-bb4a-3cfa93696f81',
    name: 'test',
    description: 'test',
    amount: 10,
  },
  {
    id: '7eaadf92-33e5-48b8-bb4a-3cfa93696f81',
    name: 'test',
    description: 'test',
    amount: 10,
  },
  {
    id: '7eaadf92-33e5-48b8-bb4a-3cfa93696f81',
    name: 'test',
    description: 'test',
    amount: 10,
  },
];
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
  dataSource = ELEMENT_DATA;
  constructor(
    private updateDialog: MatDialog,
    private deleteDialog: MatDialog
  ) {}

  ngOnInit(): void {}

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
