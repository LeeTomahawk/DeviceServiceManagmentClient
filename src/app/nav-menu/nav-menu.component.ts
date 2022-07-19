import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = true;
  showClientSubmenu: boolean = false;
  showEmployeeSubmenu: boolean = false;
  showManagerSubmenu: boolean = false;
  showTaskSubmenu: boolean = false;
  showWorkplaceSubmenu: boolean = false;
  showEquipmentSubmenu: boolean = false;
  isShowing = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
