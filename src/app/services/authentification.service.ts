import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authUrl = 'http://';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<AuthResponse>(this.authUrl, { email, password }, { headers })
      .pipe(
        map(response => {
          // If there's a token in the response, save it in local storage or handle it as needed
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
