import { Component } from '@angular/core';
import { AuthentificationTypeService } from '../../authentification-type.service';
import { AuthenticationService } from '../../../services/authentification.service';
import { NotificationService } from '../../../services/notification.service'; 
import { CompanyFormDTO } from './CompanyInscription.dto';

@Component({
  selector: 'app-company-inscription',
  templateUrl: './company-inscription.component.html',
  styleUrls: ['./company-inscription.component.css']
})
export class CompanyInscriptionComponent {
  model: CompanyFormDTO = {};

  constructor(
    private authService: AuthenticationService, 
    private authentificationService: AuthentificationTypeService,
    private notificationService: NotificationService 
  ) {}

  onClick(): void {
    this.authentificationService.emitUserType();
  }

  onSubmit() {
    this.authService.companyRegister(this.model)
      .subscribe({
        next: (response) => {
          if (response.statusCode == 201) {

            this.notificationService.showSuccess('Inscription Réussie', 'Succès');
          } else {
            this.notificationService.showError('Erreur de connexion', 'Erreur');
          }
        },
        error: (errorResponse) => {
          if (errorResponse.error.message == "Company already exists") {
            this.notificationService.showError('Email existe déjà', 'Erreur');
          } else {
            this.notificationService.showError('Erreur de connexion', 'Erreur');
          }
        }
      });
  }
}
