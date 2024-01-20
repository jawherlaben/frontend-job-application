import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentification.service';
import { AuthentificationTypeService } from '../../authentification-type.service';

@Component({
  selector: 'app-company-connect',
  templateUrl: './company-connect.component.html',
  styleUrls: ['./company-connect.component.css']
})
export class CompanyConnectComponent {
  authForm: FormGroup;
  loginMessage: string = '';
  loginMessageClass: string = '';

  onClick(): void {
    this.authentificationService.emitUserType();
  }

  constructor( private formBuilder: FormBuilder, private authService: AuthenticationService, private authentificationService: AuthentificationTypeService ) {
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
      this.authService.companyLogin(this.authForm.value.email, this.authForm.value.password)
        .subscribe({
          next: (response) => {
            this.showErrorMessage('Login successful');
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
