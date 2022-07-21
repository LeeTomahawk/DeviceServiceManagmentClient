import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Equipment } from '../WorkplaceInterface';
const ELEMENT_DATA: Equipment[] = [
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
];
@Component({
  selector: 'app-workplace-add-equipment',
  templateUrl: './workplace-add-equipment.component.html',
  styleUrls: ['./workplace-add-equipment.component.css'],
})
export class WorkplaceAddEquipmentComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { workplaceId: string }) {}
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {}
}
