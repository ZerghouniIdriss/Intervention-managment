import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
 import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from '../../api-authorization/authorize.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiServer;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string,) {
    this.apiServer = baseUrl;
  }
   

  updateCurrentUser(item): Observable<IUser> {
    return this.http.put<IUser>(this.apiServer + 'Accounts/' + item.id, item)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  getCurrentUser(): Observable<IUser> {
    return this.http.get<IUser>(this.apiServer + 'Accounts')
      .pipe(
        catchError(this.errorHandler)
      )
  }


  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
