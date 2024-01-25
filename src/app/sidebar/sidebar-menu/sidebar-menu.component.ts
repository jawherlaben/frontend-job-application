import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MenuService } from 'src/app/services/menu.service';
import { SubMenuItem } from 'src/app/Model/menu-model/menu-model';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    styleUrls: ['./sidebar-menu.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
   
})
export class SidebarMenuComponent implements OnInit {
  public user: User | undefined;

  
  constructor(public menuService: MenuService,private userService: UserService) {}

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  ngOnInit(): void {
    this.userService.getUserFromToken();
    this.userService.getCurrentUser().subscribe(user => {
    this.user = user;
    });
  }
}
