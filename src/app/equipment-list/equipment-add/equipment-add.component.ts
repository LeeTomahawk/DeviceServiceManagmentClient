import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewEquipmentForm } from 'src/Forms/NewEquipmentForm';
import { AddNewEquipmentDto } from 'src/Models/AddNewEquipmentDto';
import { EquipmentService } from 'src/Services/equipment.service';

@Component({
  selector: 'app-equipment-add',
  templateUrl: './equipment-add.component.html',
  styleUrls: ['./equipment-add.component.css'],
})
export class EquipmentAddComponent implements OnInit {
  equipmentForm = new NewEquipmentForm();

  constructor(
    private equipmentApiCaller: EquipmentService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addEquipment() {
    this.equipmentApiCaller
      .postEquipment(new AddNewEquipmentDto(this.equipmentForm.value))
      .subscribe(
        (x) => {
          console.log('add');
          this.router.navigate(['/equipment-add']).finally(() => {
            window.location.reload();
          });
        },
        (err) => {
          console.log(err.error);
        }
      );
  }
}
