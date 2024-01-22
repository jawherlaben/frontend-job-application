import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn = false; 
  isCompanyUser = false; 

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(loggedIn => {
      this.isUserLoggedIn = loggedIn;
      if (this.isUserLoggedIn) {
        this.authService.isCompanyUser.subscribe(isCompanyUser => {
          this.isCompanyUser = isCompanyUser;
        });
      }
    });

    this.authService.redirectToHome.subscribe(redirectToHome => {
      if (redirectToHome) {
        this.router.navigate(['/']);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.isUserLoggedIn = false;
    this.isCompanyUser = false;
  }
  
}
