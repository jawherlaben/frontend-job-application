import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CompaniesComponent } from './companies/companies.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { AboutComponent } from './about/about.component';
import { TopCompaniesComponent } from './top-companies/top-companies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileSidebarComponent } from './dashboard/profile-sidebar/profile-sidebar.component';
import { FeedComponent } from './dashboard/feed/feed.component';
import { NetworkSidebarComponent } from './dashboard/network-sidebar/network-sidebar.component';
import { AdvertisementComponent } from './dashboard/advertisement/advertisement.component';
import { ProfileComponent } from './profile/profile.component';
import { SuggestionsComponent } from './profile/suggestions/suggestions.component';
import { HeadProfileComponent } from './profile/head-profile/head-profile.component';
import { StatistiquesComponent } from './profile/statistiques/statistiques.component';
import { RessourcesComponent } from './profile/ressources/ressources.component';
import { ActiviteComponent } from './profile/activite/activite.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { RangeSelectorComponent } from './companies/range-selector/range-selector.component';
import { PaginationComponent } from './companies/pagination/pagination.component';
import { SearchBarComponent } from './companies/search-bar/search-bar.component';
import { AccessForbiddenComponent } from './error/access-forbidden/access-forbidden.component';
import { NonExistentURLsComponent } from './error/non-existent-urls/non-existent-urls.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './common/button/button.component';
import { InputComponent } from './common/input/input.component';
import { UnderlinedLinkComponent } from './common/underlined-link/underlined-link.component';
import { CardComponent } from './common/card/card.component';
import { ConnecterComponent } from './authentification/connecter/connecter.component';
import { InscrireComponent } from './authentification/inscrire/inscrire.component';
import { UserInscriptionComponent } from './authentification/inscrire/user-inscription/user-inscription.component';
import { CompanyInscriptionComponent } from './authentification/inscrire/company-inscription/company-inscription.component';
import { UserConnectComponent } from './authentification/connecter/user-connect/user-connect.component';
import { CompanyConnectComponent } from './authentification/connecter/company-connect/company-connect.component';
import { HeadProfileButtonsComponent } from './profile/head-profile-buttons/head-profile-buttons.component';
import { JobOffersComponent } from './job-offers/job-offers.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HeadUserDashboardComponent } from './head-user-dashboard/head-user-dashboard.component';

import { ProfileMenuComponent } from './profile-menu/profile-menu.component';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarMenuComponent } from './sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarSubmenuComponent } from './sidebar/sidebar-submenu/sidebar-submenu.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserNotificationsComponent } from './user-notifications/user-notifications.component';
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CompaniesComponent,
    HelpCenterComponent,
    AboutComponent,
    TopCompaniesComponent,
    DashboardComponent,
    ContactComponent,
    ProfileSidebarComponent,
    FeedComponent,
    NetworkSidebarComponent,
    AdvertisementComponent,
    ProfileComponent,
    SuggestionsComponent,
    HeadProfileComponent,
    StatistiquesComponent,
    RessourcesComponent,
    ActiviteComponent,
    CompanyListComponent,
    RangeSelectorComponent,
    PaginationComponent,
    SearchBarComponent,
    AccessForbiddenComponent,
    NonExistentURLsComponent,
    ButtonComponent,
    InputComponent,
    UnderlinedLinkComponent,
    CardComponent,
    ConnecterComponent,
    InscrireComponent,
    UserInscriptionComponent,
    CompanyInscriptionComponent,
    UserConnectComponent,
    CompanyConnectComponent,
    HeadProfileButtonsComponent,
    JobOffersComponent,
    UserDashboardComponent,
    HeadUserDashboardComponent,
    SidebarComponent,
    SidebarMenuComponent,
    SidebarSubmenuComponent,
    ProfileMenuComponent,
    UserSettingsComponent,
    UserNotificationsComponent,
    UserForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
