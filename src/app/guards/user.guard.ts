import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentification.service';
//import { ToastrService } from 'ngx-toastr'; // Assurez-vous d'importer le service Toastr depuis ngx-toastr

@Injectable({
  providedIn: 'root'
})
export class UserGuard {
  //constructor(private authService: AuthenticationService, private toastr: ToastrService, private router: Router) {}
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isUserLoggedIn()) {
      //this.toastr.info('Veuillez vous connecter !');
      this.router.navigate(['/authentification']);
      return false;
    }
    return true;
  }
}
