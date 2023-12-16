import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  authForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService 
  ) {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  isInvalidAndTouched(field: string): boolean {
    const ctrl = this.authForm.get(field);
    return ctrl !== null && ctrl.invalid && ctrl.touched;
  }

  onSubmit() {
    if (this.authForm.valid) {
      this.authService.login(this.authForm.value.email, this.authForm.value.password)
        .subscribe(
          response => {
            console.log('Login successful', response);
          },
          error => {
            console.error('Login error', error);
          }
        );
    }
  }
}


/*
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  authForm: FormGroup;

  constructor(

    private formBuilder: FormBuilder,
    //private authService: AuthenticationService 
  ) {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  isInvalidAndTouched(field: string): boolean {
    const ctrl = this.authForm.get(field);
    return ctrl !== null && ctrl.invalid && ctrl.touched;
  }

  onSubmit() {}
}

*/