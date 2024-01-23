import { Injectable } from '@angular/core';
import { User } from '../Model/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as jwt_decode from "jwt-decode";
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUserById(userId: string): Observable<User> {
    const url = `${this.userUrl}/user/findUserbyId/${userId}`;
    return this.http.get<User>(url);
  }



  getUserFromToken(): Observable<User | undefined> {
    const storedToken = localStorage.getItem('currentUserToken');
  
    if (storedToken) {
      try {
        const userId = GetUserIdFromToken(storedToken);
        return this.getUserById(userId);
      } catch (error) {
        console.error('Erreur lors du décodage du token : ', error);
      }
    }
  
    return new Observable(observer => observer.next(undefined));
  }

}

function GetUserIdFromToken(token: string): string {

  const decodedToken: any = jwt_decode.jwtDecode(token);
  return decodedToken._id;
}



