import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-company-inscription',
  templateUrl: './company-inscription.component.html',
  styleUrls: ['./company-inscription.component.css']
})
export class CompanyInscriptionComponent {
  @Output() changeType: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  
  onClick() {
    this.changeType.emit();
  }

  onCompanySubmit(formValue: any) {
    console.log(formValue);
  }

}
