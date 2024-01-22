import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  
  public user: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserFromToken().subscribe(user => {
      this.user = user;
    });
  }
}
