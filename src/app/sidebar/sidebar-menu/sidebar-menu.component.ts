import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MenuService } from 'src/app/services/menu.service';
import { SubMenuItem } from 'src/app/Model/menu-model/menu-model';

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    styleUrls: ['./sidebar-menu.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
   
})
export class SidebarMenuComponent implements OnInit {
  constructor(public menuService: MenuService) {}

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  ngOnInit(): void {}
}
