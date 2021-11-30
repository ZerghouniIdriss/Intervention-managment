import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-clinique',
  templateUrl: './clinique.component.html'
})
export class CliniqueComponent {
  public items: Clinique[];
  public isAdding: boolean = false;
  private apiServer;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private formBuilder: FormBuilder) {
    this.apiServer = baseUrl;
    http.get<Clinique[]>(this.apiServer + 'Cliniques').subscribe(result => {
      this.items = result;
    },
      error => console.error(error));
  }

  form = this.formBuilder.group({
    id: 0,
    name: ''
  });

  onSubmit(): void {
    this.create(this.form.value).subscribe(res => {
      console.warn('Your order has been submitted', this.form.value);
      this.items.push(res);
      this.resetForm();
    })
  }


  onAdd(): void {
    this.isAdding = true;
  }

  onDelete(index: any): void {
    this.delete(index).subscribe(res => {
      this.items.splice(index, 1);
    });
  }

  onCancel(): void {
    this.resetForm();
  }

  private resetForm() {
    this.form.reset();
    this.isAdding = false;
  }

  delete(id) {
    return this.http.delete<Clinique>(this.apiServer + 'Cliniques/'+ id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(item): Observable<Clinique> {
    return this.http.post<Clinique>(this.apiServer + 'Cliniques', item)
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



interface Clinique {
  id?: number;
  name: string;
}
