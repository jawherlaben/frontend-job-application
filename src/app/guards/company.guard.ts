import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyGuard {

  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isUserLoggedIn() || !this.authService.isCompany()) {
      this.router.navigate(['/authentification']);
      return false;
    }
    return true;
  }
}
