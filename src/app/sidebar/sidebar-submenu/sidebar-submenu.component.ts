import { Component, Input, OnInit } from '@angular/core';
import { SubMenuItem } from 'src/app/Model/menu-model';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-sidebar-submenu',
  templateUrl: './sidebar-submenu.component.html',
})
export class SidebarSubmenuComponent implements OnInit {
  @Input() public submenu = <SubMenuItem>{
    group: 'Menu',
    separator: false,
    items: [{
      icon: 'assets/icons/heroicons/outline/chart-pie.svg',
      label: 'Dashboard',
      route: '/user-component/user-dashboard',
    }],
  };

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}
}
