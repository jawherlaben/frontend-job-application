import { Component } from '@angular/core';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent {
  inscriptionType = 'user'; // 'user' ou 'company'

  setInscriptionType(type: string) {
    this.inscriptionType = type;
  }


  onCompanySubmit(formValue: any) {
    // Utilisez le service pour envoyer les données du formulaire à votre backend
    console.log(formValue);
    // Exemple : this.myService.createCompany(formValue).subscribe(...);
  }
}
