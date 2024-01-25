import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-education-card',
  templateUrl: './user-education-card.component.html',
})
export class UserEducationCardComponent {

  @Input() education: any;


}
