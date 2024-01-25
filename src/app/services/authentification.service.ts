import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { UserFormDTO } from '../authentification/inscrire/user-inscription/UserInscription.dto';
import { CompanyFormDTO } from '../authentification/inscrire/company-inscription/CompanyInscription.dto';
import { Router } from '@angular/router';

export interface LoginResponse {
  token: string;
}

export interface RegistrationResponse {
  statusCode: number;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private authUrl = environment.apiUrl;

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.isLoggedInSubject.asObservable();

  private isCompanyUserSubject = new BehaviorSubject<boolean>(false);
  isCompanyUser = this.isCompanyUserSubject.asObservable();

  private redirectToHomeSubject = new BehaviorSubject<boolean>(false);
  redirectToHome = this.redirectToHomeSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  userLogin(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<LoginResponse>(this.authUrl + '/auth/login', { email, password }, { headers })
      .pipe(
        map(response => {
          if (response && response.token) {
            localStorage.setItem('currentUserToken', response.token);
            this.isLoggedInSubject.next(true);
            this.isCompanyUserSubject.next(false);
            this.redirectBasedOnRole('user'); 
          }
          return response;
        })
      );
  }

  companyLogin(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<LoginResponse>(this.authUrl + '/auth/company-login', {companyEmail: email, companyPassword: password }, { headers })
      .pipe(
        map(response => {
          if (response && response.token) {
            localStorage.setItem('currentUserToken', response.token);
            this.isLoggedInSubject.next(true);
            this.isCompanyUserSubject.next(true);
            this.redirectBasedOnRole('company'); 
          }
          return response;
        })
      );
  }

  userRegister(userForm: UserFormDTO): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<RegistrationResponse>(this.authUrl + '/user/register', userForm, { headers });
  }

  companyRegister(companyForm: CompanyFormDTO): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<RegistrationResponse>(this.authUrl + '/company', companyForm, { headers });
  }

  logout(): void {
    localStorage.removeItem('currentUserToken');
    this.redirectToHomeSubject.next(true);
    this.isLoggedInSubject.next(false);
    this.isCompanyUserSubject.next(false);
    this.router.navigate(['/']);
  }

  private redirectBasedOnRole(role: string): void {
    if (role === 'user') {
      this.router.navigate(['/user-component']);
    } else if (role === 'company') {
      this.router.navigate(['/company-dashboard']);
    }
  }

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('currentUserToken');
  }

  isUser(): boolean {
    const token = localStorage.getItem('currentUserToken');
    if (token) {
      const tokenPayload = this.decodeToken(token);
      return tokenPayload.role === 'user';
    } else {
      return false;
    }
  }

  isCompany(): boolean {
    const token = localStorage.getItem('currentUserToken');
    if (token) {
      const tokenPayload = this.decodeToken(token);
      return tokenPayload.role === 'company';
    } else {
      return false;
    }
  }

  private decodeToken(token: string): any {
    const tokenParts = token.split('.');
    if (tokenParts.length === 3) {
      const decodedToken = JSON.parse(atob(tokenParts[1]));
      return decodedToken;
    } else {
      return null;
    }
  }
}
