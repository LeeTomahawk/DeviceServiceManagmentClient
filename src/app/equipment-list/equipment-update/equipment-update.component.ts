import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateEquipmentForm } from 'src/Forms/UdateEquipmentForm';
import { UpdateEquipmentDto } from 'src/Models/UpdateEquipmentDto';
import { EquipmentService } from 'src/Services/equipment.service';
import { Equipment } from '../equipmentInterface';

@Component({
  selector: 'app-equipment-update',
  templateUrl: './equipment-update.component.html',
  styleUrls: ['./equipment-update.component.css'],
})
export class EquipmentUpdateComponent implements OnInit {
  updateForm = new UpdateEquipmentForm();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { equipment: Equipment },
    private equipmentApiCaller: EquipmentService
  ) {}

  ngOnInit(): void {
    console.log(this.data.equipment);
    this.updateForm.controls['id'].setValue(this.data.equipment.id);
    this.updateForm.controls['name'].setValue(this.data.equipment.name);
    this.updateForm.controls['description'].setValue(
      this.data.equipment.description
    );
    this.updateForm.controls['amount'].setValue(this.data.equipment.amount);
  }

  update() {
    this.equipmentApiCaller
      .putEquipment(new UpdateEquipmentDto(this.updateForm.value))
      .subscribe(
        (x) => {
          console.log('add');
        },
        (err) => {
          console.log(err.error);
        }
      );
  }
}
