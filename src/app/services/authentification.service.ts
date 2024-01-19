import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

export interface AuthResponse {
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private authUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<AuthResponse>(this.authUrl, { email, password }, { headers })
      .pipe(
        map(response => {
          if (response && response.token) {
            localStorage.setItem('currentUserToken', response.token);
          }
          return response;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('currentUserToken');
  }
}
