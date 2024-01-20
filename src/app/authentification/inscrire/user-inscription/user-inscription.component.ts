import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-inscription',
  templateUrl: './user-inscription.component.html',
  styleUrls: ['./user-inscription.component.css']
})
export class UserInscriptionComponent {
  @Output() changeType: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  
  onClick() {
    this.changeType.emit();
  }

  onUserSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data: ', form.value);
    }
  }
}
