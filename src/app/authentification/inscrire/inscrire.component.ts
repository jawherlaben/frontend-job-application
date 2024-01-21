import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent {
  @Input() inscriptionType = 'user';
  
  onCompanySubmit(formValue: any) {
    console.log(formValue);
  }
}
