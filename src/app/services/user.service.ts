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
    
    const storedToken = localStorage.getItem('currentUserToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${storedToken}` 
    });
    const url = `${this.apiUrl}/user/findUserbyId/${userId}`;
    return this.http.get<User>(url,{ headers });
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
    const storedToken = localStorage.getItem('currentUserToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${storedToken}` 
    });
    const userEmail = encodeURIComponent(user.email);
    const url = `${this.apiUrl}/${pathconst.USER_ENDPOINT_PATH}/${classpathoperations.FIND_USER_BY_ID}/${user._id}`;
    return this.http.patch(url, user,{headers });
  }

}

function GetUserIdFromToken(token: string): string {
  const decodedToken: any = jwt_decode.jwtDecode(token);
  return decodedToken._id;
}