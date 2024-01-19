import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-inscription',
  templateUrl: './user-inscription.component.html',
  styleUrls: ['./user-inscription.component.css']
})
export class UserInscriptionComponent {

  onUserSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data: ', form.value);
    }
  }
}
