import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentification.service';
import { User } from '../Model/user';

@Component({
  selector: 'app-head-user-dashboard',
  templateUrl: './head-user-dashboard.component.html',
  styleUrls: ['./head-user-dashboard.component.css']
})
export class HeadUserDashboardComponent  {
  @Input() user: User | undefined;

}
