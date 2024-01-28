import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-simple-user',
  templateUrl: './simple-user.component.html',
  styleUrls: ['./simple-user.component.css']
})
export class SimpleUserComponent implements OnInit{
  public user: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserFromToken();
    this.userService.currentUser.subscribe(user => {
      this.user = user;
    });
  }

}
