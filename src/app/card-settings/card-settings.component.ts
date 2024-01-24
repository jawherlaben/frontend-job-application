import { Component, Input } from '@angular/core';
import { User } from '../Model/user';
import { UserFormDTO } from '../authentification/inscrire/user-inscription/UserInscription.dto';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-card-settings',
  templateUrl: './card-settings.component.html',
  styleUrls: ['./card-settings.component.css']
})
export class CardSettingsComponent {
  @Input() user: User | undefined ;
  model: UserFormDTO = {};
  editMessage: string;
  editMessageClass: string;


  constructor( private userService: UserService) {
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



  updateUserInfos(settingsForm: NgForm) {
    if (settingsForm.valid && this.user) {
      this.userService.updateUser(this.user).subscribe({
        next: (response) => {
          console.log('Mise à jour réussie', response);
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour', error);
        }
      });
    } else {
      console.log("Le formulaire n'est pas valide ou l'utilisateur est undefined");
    }
  }
  

}
