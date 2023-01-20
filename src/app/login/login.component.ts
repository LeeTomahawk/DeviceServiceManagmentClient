import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginForm } from 'src/Forms/LoginForm';
import { UserLoginDto } from 'src/Models/UserLoginDto';
import { AuthService } from 'src/Services/auth.service';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new LoginForm();
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {}

  login() {
    this.userService.login(new UserLoginDto(this.loginForm.value)).subscribe(
      (response) => {
        const token = response.body.token;
        if (token) {
          this.authService.setToken(token);
          this.router.navigate(['/home']).finally(() => {
            window.location.reload();
          });
        } else {
          throw new Error('Invalid token.');
        }
      },
      (error) => {
        this._snackBar.open(error.error, 'X', {
          duration: 3000
        });
      }
    );
  }
}
