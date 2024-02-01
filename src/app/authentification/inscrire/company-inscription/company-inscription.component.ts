import { Component } from '@angular/core';
import { AuthentificationTypeService } from '../../authentification-type.service';
import { AuthenticationService } from '../../../services/authentification.service';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService  
  ) {}

  onClick(): void {
    this.authentificationService.emitUserType();
  }

  onSubmit() {
    this.authService.companyRegister(this.model)
      .subscribe({
        next: (response) => {
          if (response.statusCode == 201) {

            this.toastr.success('Inscription Réussie', 'Succès');
          } else {
            this.toastr.error('Erreur de connexion', 'Erreur');
          }
        },
        error: (errorResponse) => {
          if (errorResponse.error.message == "Company already exists!") {
            this.toastr.error('Email existe déjà', 'Erreur');
          } else {
            this.toastr.error('Erreur de connexion !', 'Erreur');
          }
        }
      });
  }
}
