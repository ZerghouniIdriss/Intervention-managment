import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Intervention } from './intervention.interface';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {
  private apiServer;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string,) {
    this.apiServer = baseUrl;
}


  /**CRUD  */

  getAll(): Observable<Intervention[]> {
    return this.http.get<Intervention[]>(this.apiServer + 'Interventions')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id) {
    return this.http.delete<Intervention>(this.apiServer + 'Interventions/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(item): Observable<Intervention> {
    return this.http.post<Intervention>(this.apiServer + 'Interventions', item)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(item): Observable<Intervention> {
    return this.http.put<Intervention>(this.apiServer + 'Interventions/' + item.id, item)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  /** CRUD END */

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
