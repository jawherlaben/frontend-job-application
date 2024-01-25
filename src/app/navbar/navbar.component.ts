import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentification.service';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn = false; 
  isCompanyUser = false; 
  showDropdown = false;
  user: User | undefined; 


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

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    this.authService.logout();
    this.isUserLoggedIn = false;
    this.isCompanyUser = false;
    this.showDropdown = false;
  }
}
