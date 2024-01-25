import { Injectable } from '@angular/core';
import { User } from '../Model/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = environment.apiUrl;
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
    const url = `${this.userUrl}/user/findUserbyId/${userId}`;
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
    const userEmail = encodeURIComponent(user.email);
    const url = `${this.userUrl}/user/${userEmail}`;
    return this.http.patch(url, user);
  }

}

function GetUserIdFromToken(token: string): string {
  const decodedToken: any = jwt_decode.jwtDecode(token);
  return decodedToken._id;
}


