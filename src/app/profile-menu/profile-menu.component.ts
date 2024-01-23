import { Component, Input, OnInit } from '@angular/core';
//import { ClickOutsideDirective } from '../shared/click-outside-directive.directive'
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../Model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css'],
})
export class ProfileMenuComponent implements OnInit {
  public isMenuOpen = false;
  @Input() public user: User | undefined;


  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.userService.getUserFromToken();
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }
}