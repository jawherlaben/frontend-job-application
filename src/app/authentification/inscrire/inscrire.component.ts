import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent {
  inscriptionType = 'user';
  @Output() changeType: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  
  onClick() {
    this.changeType.emit();
  }

  setInscriptionType(type: string) {
    this.inscriptionType = type;
  }

  onCompanySubmit(formValue: any) {
    console.log(formValue);
  }
}
