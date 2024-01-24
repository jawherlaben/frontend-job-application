import { Component, Input, SimpleChanges } from '@angular/core';
import { UserUpdateDTO } from 'src/app/user-settings/card-settings/UserUpdate.dto';

@Component({
  selector: 'app-card-user-update',
  templateUrl: './card-user-update.component.html',
  styleUrls: ['./card-user-update.component.css']
})
export class CardUserUpdateComponent {
  @Input() userUpdateDTO: UserUpdateDTO | null = null;


  
}
