import { Component } from '@angular/core';
import { AuthentificationTypeService } from '../../authentification-type.service';
import { AuthenticationService } from '../../../services/authentification.service';
import { CompanyFormDTO } from './CompanyInscription.dto';

@Component({
  selector: 'app-company-inscription',
  templateUrl: './company-inscription.component.html',
  styleUrls: ['./company-inscription.component.css']
})
export class CompanyInscriptionComponent {
  model: CompanyFormDTO = {};
  loginMessage: string;
  loginMessageClass: string;
  
  onClick(): void {
    this.authentificationService.emitUserType();
  }

  constructor(private authService: AuthenticationService, private authentificationService: AuthentificationTypeService) {
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
    this.authService.companyRegister(this.model)
      .subscribe({
        next: (response) => {
          if (response.statusCode == 201)
            this.showErrorMessage('Inscription Réussie', 'success');
          else
            this.showErrorMessage('Erreur de connexion');
        },
        error: (errorResponse) => {
          if (errorResponse.error.message == "Company already exists")
            this.showErrorMessage('Email existe déjà');
          else
            this.showErrorMessage('Erreur de connexion');
        }
      });
  }
}
