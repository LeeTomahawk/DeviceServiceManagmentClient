import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterUserForm } from 'src/Forms/RegisterUserForm';
import { RegisterUserDto } from 'src/Models/RegisterUserDto';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-manager-add',
  templateUrl: './manager-add.component.html',
  styleUrls: ['./manager-add.component.css'],
})
export class ManagerAddComponent implements OnInit {
  registerForm = new RegisterUserForm();
  constructor(
    private userServiceApiCaller: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  register() {
    this.registerForm.get('roleType')?.setValue('MANAGER');
    console.log(this.registerForm.value);
    this.userServiceApiCaller
      .register(new RegisterUserDto(this.registerForm.value))
      .subscribe(
        (x) => {
          console.log('add');
          this.router.navigate(['/manager-list']).finally(() => {
            window.location.reload();
          });
        },
        (err) => {
          this._snackBar.open("Hasła się nie zgadzają, telefon lub adres email już jest zajęty!", 'X', {
            duration: 3000
          });
        }
      );
  }
}
