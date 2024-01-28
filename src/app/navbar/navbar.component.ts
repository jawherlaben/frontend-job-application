import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { AuthenticationService } from '../services/authentification.service';
import { UserService } from '../services/user.service';
import { User } from '../Model/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn = false; 
  isCompanyUser = false;
  user: User | undefined; 

  constructor(
    private authService: AuthenticationService,
    private userService: UserService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(loggedIn => {
      this.isUserLoggedIn = loggedIn;
      if (this.isUserLoggedIn) {
        this.userService.currentUser.subscribe(user => {
          this.user = user;
        });
      }
    });

    this.authService.isCompanyUser.subscribe(isCompanyUser => {
      this.isCompanyUser = isCompanyUser;
    });
  }
 


  logout() {
    console.log("LOGOUT ! ");
    this.authService.logout();
    this.isUserLoggedIn = false;
    this.isCompanyUser = false;
    this.router.navigate(['/authentification']); 
  }
}
