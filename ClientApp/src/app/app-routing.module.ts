import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';
import { CliniqueComponent } from './clinique/clinique.component';
import { HomeComponent } from './home/home.component';
import { InterventionComponent } from './intervention/intervention.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: InterventionComponent, pathMatch: 'full' },
  { path: 'home', canActivate: [AuthorizeGuard],component: HomeComponent },
  { path: 'interventions', component: InterventionComponent },
  { path: 'cliniques', canActivate: [AuthorizeGuard], component: CliniqueComponent },
  //{ path: 'profiles', component: ProfileComponent },
  { path: 'profiles', redirectTo: '/authentication/profile', pathMatch: 'full' },
  { path: 'interventions', canActivate: [AuthorizeGuard], component: InterventionComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
