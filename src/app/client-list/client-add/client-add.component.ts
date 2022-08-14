import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterClientForm } from 'src/Forms/RegisterClientForm';
import { RegisterClientDto } from 'src/Models/RegisterClientDto';
import { ClientService } from 'src/Services/client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css'],
})
export class ClientAddComponent implements OnInit {
  registerForm = new RegisterClientForm();
  constructor(private clientApiCaller: ClientService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.clientApiCaller
      .createClient(new RegisterClientDto(this.registerForm.value))
      .subscribe(
        (x) => {
          console.log('add');
          this.router.navigate(['/client-list']).finally(() => {
            window.location.reload();
          });
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
