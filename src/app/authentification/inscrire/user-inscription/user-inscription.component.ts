import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationTypeService } from '../../authentification-type.service';

@Component({
  selector: 'app-user-inscription',
  templateUrl: './user-inscription.component.html',
  styleUrls: ['./user-inscription.component.css']
})
export class UserInscriptionComponent {
  onClick(): void {
    this.authentificationService.emitUserType();
  }

  constructor( private authentificationService: AuthentificationTypeService ) {
  }

  onUserSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data: ', form.value);
    }
  }
}
