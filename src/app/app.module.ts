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
import { SuggestionsComponent } from './profile/suggestions/suggestions.component';
import { HeadProfileComponent } from './profile/user-profil/user-head-profile/user-head-profile.component';
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
import { UserDashboardComponent } from './user/simple-user/user-dashboard/user-dashboard.component';
import { HeadUserDashboardComponent } from './head-user-dashboard/head-user-dashboard.component';

import { ProfileMenuComponent } from './navbar/profile-menu/profile-menu.component';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarMenuComponent } from './sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarSubmenuComponent } from './sidebar/sidebar-submenu/sidebar-submenu.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserNotificationsComponent } from './user/simple-user/user-notifications/user-notifications.component';
import { CardSettingsComponent } from './user-settings/card-settings/card-settings.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { CardUserUpdateComponent } from './user-settings/card-user-update/card-user-update.component';
import { UserSettingsAuthComponent } from './user-settings/user-settings-auth/user-settings-auth.component';
import { ProflixVerifiedSettingsComponent } from './user-settings/proflix-verified-settings/proflix-verified-settings.component';
import { PaiementsSettingsComponent } from './user-settings/paiements-settings/paiements-settings.component';
import { ForgetPasswordSettingsComponent } from './user-settings/forget-password-settings/forget-password-settings.component';
import { NewPasswordSettingsComponent } from './user-settings/new-password-settings/new-password-settings.component';
import { TwoStepsAuthSettingsComponent } from './user-settings/two-steps-auth-settings/two-steps-auth-settings.component';
import { InformationsAutorisationsSettingsComponent } from './user-settings/informations-autorisations-settings/informations-autorisations-settings.component';
import { SimpleUserComponent } from './user/simple-user/simple-user.component';
import { PasswordSecurityComponentComponent } from './user-settings/password-security-component/password-security-component.component';
import { CardForgetPasswordComponent } from './user-settings/card-forget-password/card-forget-password.component';
import { CardTwostepsAuthenticationComponent } from './user-settings/card-twosteps-authentication/card-twosteps-authentication.component';
import { AuthInformationsSavedComponent } from './user-settings/auth-informations-saved/auth-informations-saved.component';
import { UserProfilComponent } from './profile/user-profil/user-profil.component';
import { UserEducationCardComponent } from './profile/user-profil/user-education-card/user-education-card.component';
import { UserSkillsCardComponent } from './profile/user-profil/user-skills-card/user-skills-card.component';
import { UserExperienceCardComponent } from './profile/user-profil/user-experience-card/user-experience-card.component';


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
    CardSettingsComponent,
    DateFormatPipe,
    CardUserUpdateComponent,
    UserSettingsAuthComponent,
    ProflixVerifiedSettingsComponent,
    PaiementsSettingsComponent,
    ForgetPasswordSettingsComponent,
    NewPasswordSettingsComponent,
    TwoStepsAuthSettingsComponent,
    InformationsAutorisationsSettingsComponent,
    SimpleUserComponent,
    PasswordSecurityComponentComponent,
    CardForgetPasswordComponent,
    CardTwostepsAuthenticationComponent,
    AuthInformationsSavedComponent,
    UserProfilComponent,
    UserEducationCardComponent,
    UserSkillsCardComponent,
    UserExperienceCardComponent,
    
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
