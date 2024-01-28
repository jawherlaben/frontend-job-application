import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private showSideBar = true;
  private profileSettings = false;
  private pagesMenu = [
  ];

  constructor() { }

  getSideBarState() {
    return this.showSideBar;
  }

  getProfileSettingsState() {
    return this.profileSettings;
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }

  toggleProfileSettings() {
    this.profileSettings = !this.profileSettings;
  }
}
