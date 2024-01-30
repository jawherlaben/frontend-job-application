import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentification.service';
import { UserService } from '../services/user.service';
import { User } from '../Model/user';
import { Company } from '../Model/Company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn = false; 
  isCompanyUser = false;
  user: User | undefined;
  company: Company | undefined;

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private companyService: CompanyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      if (user) {
        this.user = user;
        this.isUserLoggedIn = true;
      }
    });

    this.companyService.getCompanyFromToken();
    this.companyService.currentCompany.subscribe(company => {
      this.isCompanyUser = true;
      this.company = company;
    });
  }

  logout() {
    this.authService.logout();
    this.isUserLoggedIn = false;
    this.isCompanyUser = false;
    this.router.navigate(['/home']); 
  }
}
