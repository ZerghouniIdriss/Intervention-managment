import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {  Observable } from 'rxjs';
import { AuthResponseDto } from '../_interfaces/response/AuthResponseDto';
import { RegistrationResponseDto } from '../_interfaces/user/RegistrationResponseDto';
import { UserForAuthenticationDto } from '../_interfaces/user/UserForAuthenticationDto';
import { UserForRegistrationDto } from '../_interfaces/user/UserForRegistrationDto';
import { IUser } from "../_interfaces/user/iuser.interface";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiServer: string;

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string, private _jwtHelper: JwtHelperService, private router: Router) {
    this.apiServer = baseUrl;
  }

  public isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("token");

    return token && !this._jwtHelper.isTokenExpired(token);
  }

  public registerUser = (body: UserForRegistrationDto) => {
    return this._http.post<RegistrationResponseDto>(this.apiServer + 'accounts/registration', body);
  }
  public loginUser = (body: UserForAuthenticationDto) => {
    return this._http.post<AuthResponseDto>(this.apiServer + 'accounts/login', body);
  }
  public logout = () => {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/landing');
    //Call backend for logout

   }
   
  public getCurrentUser(): Observable<IUser> {
    return this._http.get<IUser>(this.apiServer + 'Accounts/GetCurrentUser');
      
  }

  public getCurrentUserName(): Observable<string> {
    return this._http.get<string>(this.apiServer + 'Accounts/GetCurrentUserName');

  }
}
