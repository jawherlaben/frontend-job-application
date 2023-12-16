import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { InscrireComponent } from './inscrire/inscrire.component';
import { CompaniesComponent } from './companies/companies.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'authentification', component: AuthentificationComponent },

  {path: 'companies' , component : CompaniesComponent},
  { path: 'inscrire', component: InscrireComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: '**', component: ErrorComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
