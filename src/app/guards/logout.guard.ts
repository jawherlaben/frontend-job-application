import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { CompanyService } from '../services/company.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuardClass {
  isUserLoggedIn: boolean = false;
  isCompanyLoggedIn: boolean = false;
  
  constructor(private userService: UserService, private companyService: CompanyService, private router: Router) {
    this.userService.getUserFromToken();
    this.userService.currentUser.subscribe(() => {
      this.isUserLoggedIn = true;
    });

    this.companyService.getCompanyFromToken();
    this.companyService.currentCompany.subscribe(() => {
      this.isCompanyLoggedIn = true;
    });
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.isCompanyLoggedIn) {
      this.router.navigate(['/company-component/profile']);
      return false
    }
    
    if(this.isUserLoggedIn) {
      this.router.navigate(['/user-component/user-dashboard']);
      return false;
    }

    return true;
  }
}

export const LogoutGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(LogoutGuardClass).canActivate(next, state);
}