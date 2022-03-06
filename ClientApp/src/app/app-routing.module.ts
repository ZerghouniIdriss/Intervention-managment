import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from '../api-authorization/authorize.guard';
import { CliniqueComponent } from './clinique/clinique.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
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
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
