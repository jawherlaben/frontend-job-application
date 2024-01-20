import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationTypeService {
  private userTypeSubject = new BehaviorSubject<void>(undefined);
  private connectTypeSubject = new BehaviorSubject<void>(undefined);

  userType$: Observable<void> = this.userTypeSubject.asObservable();
  connectType$: Observable<void> = this.connectTypeSubject.asObservable();

  emitConnectType(): void {
    this.connectTypeSubject.next();
  }

  emitUserType(): void {
    this.userTypeSubject.next();
  }
}
