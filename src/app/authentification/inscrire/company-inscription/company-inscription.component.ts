import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthentificationTypeService } from '../../authentification-type.service';

@Component({
  selector: 'app-company-inscription',
  templateUrl: './company-inscription.component.html',
  styleUrls: ['./company-inscription.component.css']
})
export class CompanyInscriptionComponent {
  onClick(): void {
    this.authentificationService.emitUserType();
  }

  constructor( private formBuilder: FormBuilder, private authentificationService: AuthentificationTypeService ) {
    
  }

  onCompanySubmit(formValue: any) {
    console.log(formValue);
  }

}
