import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-workplace-add-equipment',
  templateUrl: './workplace-add-equipment.component.html',
  styleUrls: ['./workplace-add-equipment.component.css'],
})
export class WorkplaceAddEquipmentComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { workplaceId: string }) {}

  ngOnInit(): void {}
}
