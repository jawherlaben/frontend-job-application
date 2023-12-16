import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { CompanyInscriptionComponent } from './inscrire/company-inscription/company-inscription.component';
import { UserInscriptionComponent } from './inscrire/user-inscription/user-inscription.component';
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


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    NavbarComponent,
    InscrireComponent,
    CompanyInscriptionComponent,
    UserInscriptionComponent,
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
    NonExistentURLsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
