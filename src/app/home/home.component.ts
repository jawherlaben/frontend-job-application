import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentification.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  isUserLoggedIn: boolean = false;


  constructor(private authService: AuthenticationService, private notif:NotificationService) {}

    ngOnInit() {
      
      //this.notif.showSuccess("success message","title") ;
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      this.isUserLoggedIn = loggedIn;
    });

  }
}
