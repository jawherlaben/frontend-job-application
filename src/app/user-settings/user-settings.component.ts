import { Component } from '@angular/core';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  public user: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserFromToken();
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }
}