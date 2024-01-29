import { Injectable } from '@angular/core';
import { Menu } from '../core/constants/menu';
import { MenuItem } from '../Model/menu-model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private showSideBarSubject = new BehaviorSubject<boolean>(true);
  public showSideBar$: Observable<boolean> = this.showSideBarSubject.asObservable();
  
  public pagesMenu: MenuItem[];

  constructor() {
    this.pagesMenu = Menu.pages;
  }

  toggleSideBar() {
    this.showSideBarSubject.next(!this.showSideBarSubject.value);
  }
}
