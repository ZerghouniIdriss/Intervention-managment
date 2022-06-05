import { InterventionFilterPipe } from './shared/pipes/intervention-filter.pipe';
import { CliniqueComponent } from './clinique/clinique.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
 import {  MatButtonModule, MatCardModule,  MatDatepickerModule,  MatDividerModule, MatGridListModule, MatInputModule, MatListModule,
   MatNativeDateModule, MatSelectModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterventionComponent } from './intervention/intervention.component';
import { InterventionCardComponent } from './intervention/intervention-card/intervention-card.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AutoCompleteComponent } from './shared/component/auto-complete/auto-complete.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { JwtModule } from "@auth0/angular-jwt";
import { LandingComponent } from './landing/landing.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export function tokenGetter() {
  return localStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CliniqueComponent,
    InterventionComponent,
    InterventionCardComponent,
    InterventionFilterPipe,
    ProfileComponent,
    AutoCompleteComponent,
    NotFoundComponent,
    LandingComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
     ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatExpansionModule,
    MatCardModule, 
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule, 
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:44380", "medfellow.azurewebsites.net", "medfellow.azurewebsites.net:44380"],
        blacklistedRoutes: []
      }
    }),
    

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    }, HttpClient,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
