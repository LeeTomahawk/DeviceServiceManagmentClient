import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EquipmentService } from 'src/Services/equipment.service';
import { WorkplaceService } from 'src/Services/workplace.service';
import { Workplace } from '../../WorkplaceInterface';

@Component({
  selector: 'app-workplace-add-equipment',
  templateUrl: './workplace-add-equipment.component.html',
  styleUrls: ['./workplace-add-equipment.component.css'],
})
export class WorkplaceAddEquipmentComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { element: Workplace },
    private equipmentApiCaller: EquipmentService,
    private workplaceApiCaller: WorkplaceService
  ) {}
  equipmentList: any;
  ngOnInit(): void {
    this.getAvailableEquipment();
  }

  getAvailableEquipment() {
    this.equipmentApiCaller.getEquipmentList().subscribe((data) => {
      this.equipmentList = data;
    });
  }

  async addEquipment(equipmentId: string) {
    await this.workplaceApiCaller
      .postWorkplaceAddEquipment(this.data.element.id, equipmentId)
      .then((x) => {})
      .catch((x) => {
        console.log(x.error);
      });
  }
}
