import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.css']
})
export class ConnecterComponent {
  connectType = 'user';
  @Output() changeType: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  
  onClick() {
    this.changeType.emit();
  }

  constructor() {}

  setconnectType(type: string) {
    this.connectType = type;
  }

}
