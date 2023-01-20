import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterUserForm } from 'src/Forms/RegisterUserForm';
import { RegisterUserDto } from 'src/Models/RegisterUserDto';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  registerForm = new RegisterUserForm();
  constructor(
    private userServiceApiCaller: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  register() {
    this.registerForm.get('roleType')?.setValue('EMPLOYEE');
    this.userServiceApiCaller
      .register(new RegisterUserDto(this.registerForm.value))
      .subscribe(
        (x) => {
          this.router.navigate(['/employee-list']).finally(() => {
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
