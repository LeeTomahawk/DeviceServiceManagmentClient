import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Workplace } from './WorkplaceInterface';
import { WorkplaceAddComponent } from './workplace-add/workplace-add.component';
import { WorkplaceDeleteComponent } from './workplace-delete/workplace-delete.component';
import { WorkplaceInfoComponent } from './workplace-info/workplace-info.component';
import { WorkplaceUpdateComponent } from './workplace-update/workplace-update.component';

const ELEMENT_DATA: Workplace[] = [
  {
    id: 'asdasdasd123',
    identifier: 'Stanowisko 1',
    equipments: [
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
    ],
  },
  {
    id: 'asdasdasd123',
    identifier: 'Stanowisko 1',
    equipments: [
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
    ],
  },
  {
    id: 'asdasdasd123',
    identifier: 'Stanowisko 1',
    equipments: [
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
        amount: 10,
      },
      {
        wokrplaceEquipmentId: '34324e2rwfsdfsd',
        equipmentId: 'gfdgdfgfdsfs',
        name: 'Lutownica',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at pulvinar erat. Suspendisse rhoncus fringilla eleifend. Fusce ac orci ligula. Pellentesque vitae fermentum libero. Aenean ultricies rutrum ligula viverra maximus.',
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

  openInfoDialog(element: Workplace) {
    const dialogRef = this.infoDialog.open(WorkplaceInfoComponent, {
      data: { element },
    });

    dialogRef.afterClosed().subscribe((x) => {
      window.location.reload();
    });
  }
  openAddDialog(id: string) {
    const dialogRef = this.addDialog.open(WorkplaceAddComponent, {
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
