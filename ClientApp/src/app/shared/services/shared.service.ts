import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Clinique } from '../../clinique/clinique.interface';
 
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiServer;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string,) {
    this.apiServer = baseUrl;
}


 
  public getCliniques(): Observable<Clinique[]> {
    return this.http.get<Clinique[]>(this.apiServer + 'Cliniques')
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
