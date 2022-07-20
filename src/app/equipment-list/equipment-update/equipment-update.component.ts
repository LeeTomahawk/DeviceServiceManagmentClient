import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Equipment } from '../equipmentInterface';

@Component({
  selector: 'app-equipment-update',
  templateUrl: './equipment-update.component.html',
  styleUrls: ['./equipment-update.component.css'],
})
export class EquipmentUpdateComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { equipment: Equipment }) {}

  ngOnInit(): void {}
}
