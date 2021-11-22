import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clinique',
  templateUrl: './clinique.component.html'
})
export class CliniqueComponent {
  public cliniques: Clinique[];
  public isAdding: boolean = false;

  items = [
    {
      id: 1,
      name: 'sa1',

    },
    {
      id: 2,
      name: 'sa2',
    },
    {
      id: 3,
      name: 'sa3',
    },
  ]
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private formBuilder: FormBuilder) {
    http.get<Clinique[]>(baseUrl + 'cliniques').subscribe(result => {
      this.cliniques = result;
    }, error => console.error(error));
  }

  form = this.formBuilder.group({
    id: '',
    name: ''
  });

  onSubmit(): void {
    console.warn('Your order has been submitted', this.form.value);
    this.items.push(this.form.value);
    this.resetForm();
  }



  onAdd(): void {
    this.isAdding = true;
  }

  onDelete(index: any): void {
    this.items.splice(index,1);
  }
  onCancel(): void {
    this.resetForm();
  }

  private resetForm() {
    this.form.reset();
    this.isAdding = false;
  }
}



interface Clinique {
  id: string;
  name: string;
}
