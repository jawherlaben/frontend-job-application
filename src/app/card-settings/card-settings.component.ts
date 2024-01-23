import { Component, Input } from '@angular/core';
import { User } from '../Model/user';

@Component({
  selector: 'app-card-settings',
  templateUrl: './card-settings.component.html',
  styleUrls: ['./card-settings.component.css']
})
export class CardSettingsComponent {
  @Input() user: User | undefined;

  saveSettings()
  {
    console.log("Edit User");
  }

}
