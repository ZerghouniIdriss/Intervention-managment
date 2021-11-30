import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CliniqueComponent } from './clinique/clinique.component';
import { HomeComponent } from './home/home.component';
import { InterventionComponent } from './intervention/intervention.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'interventions', component: InterventionComponent },
  { path: 'cliniques', component: CliniqueComponent },
  { path: 'profiles', component: ProfileComponent },
  { path: 'interventions', component: InterventionComponent },
  { path: 'profiles', component: ProfileComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
