import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardClass {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigate(['/authentification']);
      return false;
    }
    
    if(this.authService.isCompany()) {
      this.router.navigate(['/company-dashboard']);
      return false;
    }

    return true;
  }
}

export const UserGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(UserGuardClass).canActivate(next, state);
}