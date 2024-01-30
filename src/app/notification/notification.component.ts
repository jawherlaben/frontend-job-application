import { Component ,OnInit} from '@angular/core';
import {NotificationService} from '../services/notification.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  constructor(private obj :NotificationService){}
  ngOnInit(): void {
    
  }
  success(){
    this.obj.showSuccess("success message","title");

  }
  error(){
    this.obj.showError("success message","title");

  }
  Info(){
    this.obj.showInfo("success message","title");

  }
  warning(){
    this.obj.showWarning("success message","title");


  }
  

}
