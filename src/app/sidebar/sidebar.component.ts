import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { MenuService } from '../services/menu.service';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentification.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
 
})
export class SidebarComponent implements OnInit {
  public user: User | undefined;
  showSideBar: boolean = true;

  constructor(public themeService: ThemeService, public menuService: MenuService, private userService: UserService, public authService: AuthenticationService) {}

  ngOnInit(): void {
    this.userService.getUserFromToken();
    this.userService.currentUser.subscribe(user => {
      this.user = user;
    });
    
    this.menuService.showSideBar$.subscribe((showSideBar) => {
      this.showSideBar = showSideBar;
    });
  }
}


