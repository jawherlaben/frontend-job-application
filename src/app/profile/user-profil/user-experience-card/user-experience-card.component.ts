import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-experience-card',
  templateUrl: './user-experience-card.component.html',
})
export class UserExperienceCardComponent {

  @Input() experience: any;

}
