import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MenuService } from 'src/app/services/menu.service';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
   
})
export class SidebarMenuComponent implements OnInit {
  public user: User | undefined;
  
  constructor(public menuService: MenuService,private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserFromToken();
    this.userService.currentUser.subscribe(user => {
    this.user = user;
    });
  }
}
