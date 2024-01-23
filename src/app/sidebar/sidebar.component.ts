import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { NgClass, NgIf } from '@angular/common';
import { ThemeService } from '../theme.service';
import { MenuService } from '../services/menu.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
 
})
export class SidebarComponent implements OnInit {

  constructor(public themeService: ThemeService, public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

 
}
