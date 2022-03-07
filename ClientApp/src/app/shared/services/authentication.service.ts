import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';
import { AuthResponseDto } from '../../../_interfaces/response/AuthResponseDto';
import { RegistrationResponseDto } from '../../../_interfaces/user/RegistrationResponseDto';
import { UserForAuthenticationDto } from '../../../_interfaces/user/UserForAuthenticationDto';
import { UserForRegistrationDto } from '../../../_interfaces/user/UserForRegistrationDto';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiServer: string;
  private _authChangeSub = new Subject<boolean>()
  public authChanged = this._authChangeSub.asObservable();

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string, private _jwtHelper: JwtHelperService) {
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
    this.sendAuthStateChangeNotification(false);
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this._authChangeSub.next(isAuthenticated);
  }

}
