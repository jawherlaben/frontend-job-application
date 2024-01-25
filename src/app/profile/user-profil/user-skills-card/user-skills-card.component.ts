import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-skills-card',
  templateUrl: './user-skills-card.component.html',
})
export class UserSkillsCardComponent {
  @Input() skill: any;
}
