import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.component.html',
  styleUrls: ['./connecter.component.css']
})
export class ConnecterComponent {
  authForm: FormGroup;

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

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
      console.log('Form submitted', this.authForm.value);
      // this.authService.login(this.authForm.value.email, this.authForm.value.password)
      //   .subscribe({
      //     next: (response) => {
      //       console.log('Login successful', response);
      //     },
      //     error: (error) => {
      //       console.error('Login error', error);
      //     }
      //   });
    }
    else {
      console.error('Form invalid');
    }
  }
}
