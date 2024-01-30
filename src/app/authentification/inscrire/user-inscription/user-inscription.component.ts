import { Component } from '@angular/core';
import { AuthentificationTypeService } from '../../authentification-type.service';
import { AuthenticationService } from '../../../services/authentification.service';
import { UserFormDTO } from './UserInscription.dto';
import { Router } from '@angular/router';
import { NotificationService } from '../../../services/notification.service'; 



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

  constructor( private authService: AuthenticationService, private authentificationService: AuthentificationTypeService, private router: Router, private notificationService: NotificationService  ) {
    this.loginMessage = '';
    this.loginMessageClass = '';
    
  }

  
  

  onSubmit() {
    this.authService.userRegister(this.model)
      .subscribe({
        next: (response) => {
          if (response.statusCode == 201) {
             this.notificationService.showSuccess('Inscription Réussie', 'Succès');
            this.router.navigate(['/home']);
          }
          else {
            this.notificationService.showError('Erreur de connexion', 'Erreur');
          }
        },
        error: (errorResponse) => {
          if (errorResponse.error.message == "user already exists") {
            this.notificationService.showError('Email existe déjà', 'Erreur');}
          else {
            this.notificationService.showError('Erreur de connexion', 'Erreur');
        }
      }
  
}
  )}}
