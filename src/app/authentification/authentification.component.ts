import { Component } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  authType: string = 'login';

  constructor() {}

  changeType() {
    if (this.authType == 'login')
      this.authType = 'inscrire';
    else
      this.authType = 'login';
  }
}