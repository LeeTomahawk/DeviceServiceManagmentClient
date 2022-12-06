import { Component, OnInit } from '@angular/core';
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
    private router: Router
  ) {}

  ngOnInit(): void {}

  register() {
    this.registerForm.get('roleType')?.setValue('EMPLOYEE');
    console.log(this.registerForm.value);
    this.userServiceApiCaller
      .register(new RegisterUserDto(this.registerForm.value))
      .subscribe(
        (x) => {
          console.log('add');
          this.router.navigate(['/employee-list']).finally(() => {
            window.location.reload();
          });
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
