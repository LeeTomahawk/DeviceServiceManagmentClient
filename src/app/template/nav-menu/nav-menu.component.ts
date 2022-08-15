import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/Services/auth.service';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  isExpanded = true;
  showClientSubmenu: boolean = false;
  showEmployeeSubmenu: boolean = false;
  showManagerSubmenu: boolean = false;
  showTaskSubmenu: boolean = false;
  showWorkplaceSubmenu: boolean = false;
  showEquipmentSubmenu: boolean = false;
  isShowing = false;
  isLogged: boolean = false;
  userRole!: any;
  data: any;
  title: string = '';

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.data = localStorage.getItem('token');
    if (this.data) {
      this.isLogged = true;
      this.userRole = this.authService.getRole();
    }
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
      this.showClientSubmenu = false;
      this.showEmployeeSubmenu = false;
      this.showManagerSubmenu = false;
      this.showTaskSubmenu = false;
      this.showWorkplaceSubmenu = false;
      this.showEquipmentSubmenu = false;
    }
  }

  menuclick() {
    this.isExpanded = !this.isExpanded;
    // this.showClientSubmenu = false;
    // this.showEmployeeSubmenu = false;
    // this.showManagerSubmenu = false;
    // this.showTaskSubmenu = false;
    // this.showWorkplaceSubmenu = false;
    // this.showEquipmentSubmenu = false;
  }

  logout() {
    this.authService.clearToken();
    this.router.navigate(['/login']).finally(() => {
      window.location.reload();
    });
    this.isLogged = false;
    this.userRole = '';
    this.showClientSubmenu = false;
    this.showEmployeeSubmenu = false;
    this.showManagerSubmenu = false;
    this.showTaskSubmenu = false;
    this.showWorkplaceSubmenu = false;
    this.showEquipmentSubmenu = false;
  }
}
