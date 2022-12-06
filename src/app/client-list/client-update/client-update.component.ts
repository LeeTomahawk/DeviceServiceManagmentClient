import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterClientForm } from 'src/Forms/RegisterClientForm';
import { UpdateClientForm } from 'src/Forms/UpdateClientForm';
import { UpdateClientDto } from 'src/Models/ClientUpdateDto';
import { ClientService } from 'src/Services/client.service';
import { Client } from '../clientInterface';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css'],
})
export class ClientUpdateComponent implements OnInit {
  registerForm = new UpdateClientForm();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { client: Client },
    private clientApiCaller: ClientService
  ) {}

  ngOnInit(): void {
    this.registerForm.controls['firstName'].setValue(
      this.data.client.identiti.firstName
    );
    this.registerForm.controls['lastName'].setValue(
      this.data.client.identiti.lastName
    );
    this.registerForm.controls['phoneNumber'].setValue(
      this.data.client.identiti.phoneNumber
    );
    this.registerForm.controls['city'].setValue(
      this.data.client.identiti.address.city
    );
    this.registerForm.controls['street'].setValue(
      this.data.client.identiti.address.street
    );
    this.registerForm.controls['number'].setValue(
      this.data.client.identiti.address.number
    );
    this.registerForm.controls['postCode'].setValue(
      this.data.client.identiti.address.postCode
    );
  }

  update() {
    this.clientApiCaller
      .updateClient(
        new UpdateClientDto(this.registerForm.value),
        this.data.client.id
      )
      .subscribe(
        (x) => {
          console.log('done');
        },
        (err) => {
          console.log(err.error);
        }
      );
  }
}
