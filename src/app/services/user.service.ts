import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { classpathoperations, environment, pathconst } from 'src/environments/environment';
import { Application } from '../Model/application';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  private currentUserSubject: BehaviorSubject<User | undefined>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User | undefined>(undefined);
  }

  getCurrentUser(): Observable<User | undefined> {
    return this.currentUserSubject.asObservable();
  }

  private setUser(user: User | undefined) {
    this.currentUserSubject.next(user);
  }

  getUserById(userId: string): Observable<User> {
    const url = `${this.apiUrl}/${pathconst.USER_ENDPOINT_PATH}/${classpathoperations.FIND_USER_BY_ID}/${userId}`;
    return this.http.get<User>(url);
  }

  getUserFromToken(): void {
    const storedToken = localStorage.getItem('currentUserToken');

    if (storedToken) {
      try {
        const userId = GetUserIdFromToken(storedToken);
        this.getUserById(userId).subscribe(
          user => {
            this.setUser(user);
          },
          error => {
            console.error('Erreur lors de la récupération de l\'utilisateur : ', error);
          }
        );
      } catch (error) {
        console.error('Erreur lors du décodage du token : ', error);
      }
    } else {
      this.setUser(undefined);
    }
  }

  updateUser(user: User): Observable<any> {
    const url = `${this.apiUrl}/${pathconst.USER_ENDPOINT_PATH}/${classpathoperations.FIND_USER_BY_ID}/${user._id}`;
    return this.http.patch(url, user);
  }

  getUserApplications(userId?: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/${pathconst.APPLICATION_ENDPOINT_PATH}/${pathconst.USER_ENDPOINT_PATH}/${userId}`);
  }

  changePassword(userId: string, currentPassword: string, newPassword: string): Observable<any> {
    const body = {
      currentPassword,
      newPassword
    };
    return this.http.patch(`${this.apiUrl}/${pathconst.USER_ENDPOINT_PATH}/${classpathoperations.CHANGE_USERPWD_BY_ID}/${userId}`, body);

  }

}

function GetUserIdFromToken(token: string): string {
  const decodedToken: any = jwt_decode.jwtDecode(token);
  return decodedToken._id;
}