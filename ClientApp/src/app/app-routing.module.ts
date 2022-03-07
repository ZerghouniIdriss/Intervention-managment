import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CliniqueComponent } from './clinique/clinique.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { InterventionComponent } from './intervention/intervention.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'cliniques', canActivate: [AuthGuard], component: CliniqueComponent },
  //{ path: 'profiles', component: ProfileComponent },
  { path: 'profiles', redirectTo: '/authentication/profile', pathMatch: 'full' },
  { path: 'interventions', canActivate: [AuthGuard] , component: InterventionComponent },
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
