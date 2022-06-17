import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Clinique } from './clinique.interface';

@Injectable({
  providedIn: 'root'
})
export class CliniqueService {
  private apiServer;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string,) {
    this.apiServer = baseUrl;
}


  /**CRUD  */

  getAll(): Observable<Clinique[]> {
    return this.http.get<Clinique[]>(this.apiServer + 'Cliniques')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id) {
    return this.http.delete<Clinique>(this.apiServer + 'Cliniques/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(item: Clinique): Observable<Clinique> {
    return this.http.post<Clinique>(this.apiServer + 'Cliniques', item)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(item): Observable<Clinique> {
    return this.http.put<Clinique>(this.apiServer + 'Cliniques/' + item.id, item)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  /** CRUD END */

  errorHandler(error) {
    let errorMessage = '';
    if (error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.title}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
