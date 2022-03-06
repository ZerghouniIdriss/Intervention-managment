import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { RegistrationResponseDto } from '../../../_interfaces/user/RegistrationResponseDto';
import { UserForRegistrationDto } from '../../../_interfaces/user/UserForRegistrationDto';
 @Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
     apiServer: string;
   constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string,) {
     this.apiServer = baseUrl;
   }
  public registerUser = (body: UserForRegistrationDto) => {
    return this._http.post<RegistrationResponseDto>(this.apiServer + 'accounts/registration' , body);
  } 
}
