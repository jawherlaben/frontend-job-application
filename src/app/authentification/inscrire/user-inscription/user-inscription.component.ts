import { Component } from '@angular/core';
import { AuthentificationTypeService } from '../../authentification-type.service';
import { AuthenticationService } from '../../../services/authentification.service';
import { UserFormDTO } from './UserInscription.dto';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-inscription',
  templateUrl: './user-inscription.component.html',
  styleUrls: ['./user-inscription.component.css']
})
export class UserInscriptionComponent {
  model: UserFormDTO = {};
  loginMessage: string;
  loginMessageClass: string;
  
  onClick(): void {
    this.authentificationService.emitUserType();
  }

  constructor( private authService: AuthenticationService, private authentificationService: AuthentificationTypeService, private router: Router ) {
    this.loginMessage = '';
    this.loginMessageClass = '';
  }

  showErrorMessage(message: string, type: string = 'error') {
    this.loginMessage = message;
    if (type == 'error')
      this.loginMessageClass = 'text-red-500';
    else
      this.loginMessageClass = 'text-green-500';

    setTimeout(() => {
      this.loginMessage = '';
    }, 5000);
  }

  onSubmit() {
    this.authService.userRegister(this.model)
      .subscribe({
        next: (response) => {
          if (response.statusCode == 201) {
            this.showErrorMessage('Inscription Réussie', 'success');
            this.router.navigate(['/home']);
          }
          else {
            this.showErrorMessage('Erreur de connexion');
          }
        },
        error: (errorResponse) => {
          if (errorResponse.error.message == "User already exists")
            this.showErrorMessage('Email existe déjà');
          else
            this.showErrorMessage('Erreur de connexion');
        }
      });
  }
}
