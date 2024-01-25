import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentification.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css'],
})
export class ProfileMenuComponent implements OnInit {
  public isMenuOpen = false;
  @Input() public user: User | undefined;

  isUserLoggedIn = false; 
  isCompanyUser = false; 

  constructor(private authService: AuthenticationService,private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(loggedIn => {
      this.isUserLoggedIn = loggedIn;
      if (this.isUserLoggedIn) {
        this.authService.isCompanyUser.subscribe(isCompanyUser => {
          this.isCompanyUser = isCompanyUser;
        });

      this.userService.getUserFromToken();
      this.userService.getCurrentUser().subscribe(user => {
        this.user = user;
      });
      }
    });

    this.authService.redirectToHome.subscribe(redirectToHome => {
      if (redirectToHome) {
        this.router.navigate(['/']);
      }
    });
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout();
  }
}