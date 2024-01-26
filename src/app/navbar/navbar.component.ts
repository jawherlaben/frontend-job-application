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
    this.authService.isLoggedIn.pipe(
    switchMap(loggedIn => {
    this.isUserLoggedIn = loggedIn;
    return loggedIn ? this.authService.isCompanyUser : of(false);
      })
    ).subscribe(isCompanyUser => {
    this.isCompanyUser = isCompanyUser;
    if (this.isUserLoggedIn) {
    this.userService.getUserFromToken();
    this.userService.getCurrentUser().subscribe(user => {
    this.user = user;
        });
      }
    });
  }

  logout() {
    this.authService.logout();
    this.isUserLoggedIn = false;
    this.isCompanyUser = false;
    this.router.navigate(['/authentification']); 
  }
}
