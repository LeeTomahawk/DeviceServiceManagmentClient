import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-equipment-delete',
  templateUrl: './equipment-delete.component.html',
  styleUrls: ['./equipment-delete.component.css'],
})
export class EquipmentDeleteComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { eqid: string }) {}

  ngOnInit(): void {}
}
