import { Injectable } from '@angular/core';
import { User } from '../Model/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { classpathoperations, environment, pathconst } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private currentUserSubject = new BehaviorSubject<User | undefined>(undefined);
  currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  getHeaders(): HttpHeaders {
    const storedToken = localStorage.getItem('currentUserToken');

    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storedToken}` 
    });
  }

  getUserIdFromToken(token: string): string {
    const decodedToken: any = jwt_decode.jwtDecode(token);
    return decodedToken._id;
  }

  getUserById(userId: string): Observable<User> {
    const headers = this.getHeaders();
    const url = `${this.apiUrl}/user/findUserbyId/${userId}`;
    return this.http.get<User>(url,{ headers });
  }

  getUserFromToken(): void {
    const storedToken = localStorage.getItem('currentUserToken');

    if (storedToken) {
      const userId = this.getUserIdFromToken(storedToken);
      
      this.getUserById(userId).subscribe(user => {
        this.currentUserSubject.next(user);
      });
    } else {
      this.currentUserSubject.next(undefined);
    }
  }

  updateUser(user: User): Observable<any> {
    const headers = this.getHeaders();
    const userEmail = encodeURIComponent(user.email);
    const url = `${this.apiUrl}/${pathconst.USER_ENDPOINT_PATH}/${classpathoperations.FIND_USER_BY_ID}/${user._id}`;
    return this.http.patch(url, user,{headers });
  }
}