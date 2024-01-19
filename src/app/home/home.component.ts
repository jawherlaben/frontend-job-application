import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email: string;
  password: string;

  constructor(private authService: AuthenticationService) {
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    this.authService.login(this.email, this.password);
  }
}
