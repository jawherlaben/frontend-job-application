import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { UserFormDTO } from '../authentification/inscrire/user-inscription/UserInscription.dto';
import { CompanyFormDTO } from '../authentification/inscrire/company-inscription/CompanyInscription.dto';

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

  constructor(private http: HttpClient) {}

  userLogin(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<LoginResponse>(this.authUrl + '/auth/login', { email, password }, { headers })
      .pipe(
        map(response => {
          if (response && response.token) {
            localStorage.setItem('currentUserToken', response.token);
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
          }
          return response;
        })
      );
  }

  userRegister(userForm: UserFormDTO): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<RegistrationResponse>( this.authUrl + '/user/register', userForm, { headers } )
  }

  companyRegister(companyForm: CompanyFormDTO): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<RegistrationResponse>(this.authUrl + '/company', companyForm, { headers })
  }

  logout(): void {
    localStorage.removeItem('currentUserToken');
  }
}
