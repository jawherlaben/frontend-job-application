import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../Model/user';
import { UserFormDTO } from '../../../authentification/inscrire/user-inscription/UserInscription.dto';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { UserUpdateDTO } from './UserUpdate.dto';

@Component({
  selector: 'app-card-settings',
  templateUrl: './card-settings.component.html',
  styleUrls: ['./card-settings.component.css']
})
export class CardSettingsComponent {
  @Input() user: User | undefined ;
  userUpdateDTO: UserUpdateDTO = {};
  editMessage: string;
  editMessageClass: string;

  @Output() userUpdateDTOChanged = new EventEmitter<UserUpdateDTO>();

  constructor( private userService: UserService) {
    this.editMessage = '';
    this.editMessageClass = '';
  }
  ngOnInit(): void {
    this.initializeModel();
  }

  private initializeModel(): void {
    if (this.user) {
      this.userUpdateDTO = { ...this.user };
      this.userUpdateDTO.dateBirth = this.formatDate(this.user.dateBirth);

      this.userUpdateDTOChanged.emit(this.userUpdateDTO);
    }
  }
  private formatDate(dateString: string | undefined): string {
    if (!dateString) {
      return '';
    }
  
    const d = new Date(dateString);
    if (isNaN(d.getTime())) {
      return '';
    }
  
    const month = '' + (d.getMonth() + 1);
    const day = '' + d.getDate();
    const year = d.getFullYear();
    return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-');
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

  updateUserInfos(settingsForm: NgForm): void {
    if (settingsForm.valid && this.userUpdateDTO) {
      /* && this.userUpdateDTO && this.userUpdateDTO._id */ 
      this.userService.updateUser(this.userUpdateDTO as User).subscribe({
        next: (response) => {
          console.log('Mise à jour réussie', response);
          console.log(this.userUpdateDTO.dateBirth);
          console.log(this.user?.dateBirth);

          if (this.user) {
            Object.assign(this.user, this.userUpdateDTO);
          }
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour', error);

        }
      });
    } else {
      console.log("Le formulaire n'est pas valide ou les données sont manquantes.");
    }
  }


}
