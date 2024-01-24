import { Component, Input } from '@angular/core';
import { User } from '../Model/user';
import { UserFormDTO } from '../authentification/inscrire/user-inscription/UserInscription.dto';

@Component({
  selector: 'app-card-settings',
  templateUrl: './card-settings.component.html',
  styleUrls: ['./card-settings.component.css']
})
export class CardSettingsComponent {
  @Input() user: User | undefined;
  model: UserFormDTO = {};
  editMessage: string;
  editMessageClass: string;


  constructor( ) {
    this.editMessage = '';
    this.editMessageClass = '';
  }

  showErrorMessage(message: string, type: string = 'error') {
    this.editMessage = message;
    if (type == 'error')
      this.editMessageClass = 'text-red-500';
    else
      this.editMessageClass = 'text-green-500';

    setTimeout(() => {
      this.editMessage = '';
    }, 5000);
  }

  saveSettings()
  {
    console.log("Edit User");
  }

}
