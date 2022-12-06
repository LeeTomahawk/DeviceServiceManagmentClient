import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  isLogged: boolean = false;
  name: string = '';

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.isLogged = true;
    }
    let x = this.authService.getName();
    if (x != null) this.name = x;
    console.log(this.authService.getName());
  }
}
