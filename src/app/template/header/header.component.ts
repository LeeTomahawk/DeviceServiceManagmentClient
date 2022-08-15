import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  isLogged: boolean = false;

  ngOnInit() {
    console.log(this.router.url);
    if (this.authService.isLoggedIn()) {
      this.isLogged = true;
    }
  }
}
