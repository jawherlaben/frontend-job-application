import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
 
})
export class SidebarComponent implements OnInit {
  public user: User | undefined;

  constructor(public menuService: MenuService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserFromToken();
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }
  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

 
}


