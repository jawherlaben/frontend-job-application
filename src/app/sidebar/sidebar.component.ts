import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { NgClass, NgIf } from '@angular/common';
import { ThemeService } from '../theme.service';
import { MenuService } from '../services/menu.service';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
 
})
export class SidebarComponent implements OnInit {
  public user: User | undefined;

  constructor(public themeService: ThemeService, public menuService: MenuService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserFromToken();
    this.userService.currentUser.subscribe(user => {
      this.user = user;
    });
  }
  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

 
}


