import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CompaniesComponent } from './companies/companies.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { AccessForbiddenComponent } from './error/access-forbidden/access-forbidden.component';
import { NonExistentURLsComponent } from './error/non-existent-urls/non-existent-urls.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserNotificationsComponent } from './user-notifications/user-notifications.component';
import { ProflixVerifiedSettingsComponent } from './user-settings/proflix-verified-settings/proflix-verified-settings.component';
import { InformationsAutorisationsSettingsComponent } from './user-settings/informations-autorisations-settings/informations-autorisations-settings.component';
import { PaiementsSettingsComponent } from './user-settings/paiements-settings/paiements-settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'company-dashboard', component: CompanyDashboardComponent },

  { path: 'user-settings', component: UserSettingsComponent },
  { path: 'auth-settings', component: InformationsAutorisationsSettingsComponent },
  { path: 'payments-settings', component: PaiementsSettingsComponent },
  { path: 'proflix-verified-settings', component: ProflixVerifiedSettingsComponent },

  

  { path: 'user-notifications', component: UserNotificationsComponent },

  { path: 'forbidden', component: AccessForbiddenComponent },
  { path: '**', component: NonExistentURLsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
