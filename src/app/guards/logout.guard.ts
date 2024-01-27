import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      return false;
    }
    return true;
  }
}
