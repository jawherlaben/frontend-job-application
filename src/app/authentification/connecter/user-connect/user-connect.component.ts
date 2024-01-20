import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-user-connect',
  templateUrl: './user-connect.component.html',
  styleUrls: ['./user-connect.component.css']
})
export class UserConnectComponent {
  authForm: FormGroup;
  loginMessage: string = '';
  loginMessageClass: string = '';
  @Output() changeType: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  
  onClick() {
    this.changeType.emit();
  }
  
  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  constructor( private formBuilder: FormBuilder, private authService: AuthenticationService ) {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  isInvalidAndTouched(field: string): boolean {
    const ctrl = this.authForm.get(field);
    return ctrl !== null && ctrl.invalid && ctrl.touched;
  }

  showErrorMessage(message: string, type: string = 'error') {
    this.loginMessage = message;
    if (type == 'error')
      this.loginMessageClass = 'text-red-500';
    else
      this.loginMessageClass = 'text-green-500';

    setTimeout(() => {
      this.loginMessage = '';
    }, 5000);
  }

  onSubmit() {
    if (this.authForm.valid) {
      this.authService.login(this.authForm.value.email, this.authForm.value.password)
        .subscribe({
          next: (response) => {
            this.showErrorMessage('Login successful', 'success');
          },
          error: (error) => {
            this.showErrorMessage('Erreur de connexion');
          }
        });
    }
    else {
      this.showErrorMessage('Erreur de connexion');
    }
  }
}
