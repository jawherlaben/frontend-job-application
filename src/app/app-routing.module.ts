import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AccessForbiddenComponent } from './error/access-forbidden/access-forbidden.component';
import { NonExistentURLsComponent } from './error/non-existent-urls/non-existent-urls.component';
import { UserDashboardComponent } from './dashboard/user/user-dashboard/user-dashboard.component';
import { UserSettingsComponent } from './settings/user/user-settings.component';
import { UserNotificationsComponent } from './notifications/user-notifications/user-notifications.component';
import { ProflixVerifiedSettingsComponent } from './settings/user/proflix-verified-settings/proflix-verified-settings.component';
import { PaiementsSettingsComponent } from './settings/user/paiements-settings/paiements-settings.component';
import { AuthenticatedDashboardComponent } from './auth-dashboard/auth-dashboard.component';
import { UserSettingsAuthComponent } from './settings/user/user-settings-auth/user-settings-auth.component';
import { UserProfilComponent } from './profile/user-profil/user-profil.component';
import { UserGuard } from './guards/user.guard';
import { CompanyDashboardComponent } from './dashboard/company/company-dashboard/company-dashboard.component';
import { CompanyGuard } from './guards/company.guard';
import { LogoutGuard } from './guards/logout.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [LogoutGuard] },
  { path: 'contact', component: ContactComponent },

  { path:'user-component', redirectTo: '/user-component/user-dashboard', pathMatch: 'full'},
  { path: 'user-component', component: AuthenticatedDashboardComponent, canActivate: [UserGuard], canActivateChild: [UserGuard], children: [
    { path: 'profile', component: UserProfilComponent },
    { path: 'user-dashboard', component: UserDashboardComponent },

    { path: 'user-settings', component: UserSettingsComponent },
    { path: 'auth-settings', component: UserSettingsAuthComponent },
    { path: 'payments-settings', component: PaiementsSettingsComponent },
    { path: 'proflix-verified-settings', component: ProflixVerifiedSettingsComponent },
    { path: 'user-notifications', component: UserNotificationsComponent },
    { path: 'company/:id', component: UserNotificationsComponent },
  ]},

  { path:'company-dashboard', redirectTo: '/company-dashboard/profile', pathMatch: 'full'},
  { path: 'company-dashboard', component: AuthenticatedDashboardComponent, canActivate: [CompanyGuard], canActivateChild: [CompanyGuard], children: [
    { path: 'profile', component: CompanyDashboardComponent },
  ]},
  
  { path: 'forbidden', component: AccessForbiddenComponent },
  { path: '**', component: NonExistentURLsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
