import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Workplace } from './interface';
import { WorkplaceAddComponent } from './workplace-add/workplace-add.component';
import { WorkplaceDeleteComponent } from './workplace-delete/workplace-delete.component';
import { WorkplaceInfoComponent } from './workplace-info/workplace-info.component';
import { WorkplaceUpdateComponent } from './workplace-update/workplace-update.component';

const ELEMENT_DATA: Workplace[] = [
  {
    position: 1,
    id: 'asdasdasd123',
    identifier: 'Stanowisko 1',
    equipments: [
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description: 'Cos tam',
        amount: 10,
      },
    ],
  },
];
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
  dataSource = ELEMENT_DATA;
  constructor(
    private infoDialog: MatDialog,
    private addDialog: MatDialog,
    private updateDialog: MatDialog,
    private deleteDialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openInfoDialog(id: string) {
    const dialogRef = this.infoDialog.open(WorkplaceInfoComponent, {
      data: { workplaceId: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
  openAddDialog(id: string) {
    const dialogRef = this.infoDialog.open(WorkplaceAddComponent, {
      data: { workplaceId: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
  openUpdateDialog(id: string) {
    const dialogRef = this.infoDialog.open(WorkplaceUpdateComponent, {
      data: { workplaceId: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
  openDeleteDialog(id: string) {
    const dialogRef = this.infoDialog.open(WorkplaceDeleteComponent, {
      data: { workplaceId: id },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
}
