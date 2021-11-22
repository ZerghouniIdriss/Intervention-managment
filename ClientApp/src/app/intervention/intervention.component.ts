import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Intervention } from './intervention.interface';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {

  isEditing = false;
  items:Intervention[];
  filterarg:'';

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.items = [
      {
        id: '1',
        clinique: 'Al-Kawthar',
        ref: 'x-12345',
        f_name: 'John',
        l_name: 'Smith',
        admission_date: '16-20-2021',
        motif: 'Motif de consultation',
        status: 'R'
      },
      {
        id: '2',
        clinique: 'Al-Quds',
        ref: 'x-1548',
        f_name: 'John',
        l_name: 'Smith',
        admission_date: '16-20-2021',
        motif: 'Motif de consultation',
        status: 'NR'
      },
      {
        id: '3',
        clinique: 'Al-Kawthar',
        ref: 'x-5418',
        f_name: 'Idriss',
        l_name: 'Smith',
        admission_date: '16-20-2021',
        motif: 'Motif de consultation',
        status: 'NR'
      },
    ]
  }

  form = this.formBuilder.group({
    id: '',
    clinique: '',
    ref: '',
    f_name: '',
    l_name: '',
    admission_date: '',
    motif: '',
    status: ''
  });


  onSubmit(): void {
    console.warn('Your order has been submitted', this.form.value);
    this.items.push(this.form.value);
    this.resetForm();
  }



  onAdd(): void {
    this.isEditing = true;
  }

  onDelete(index: any): void {
    this.items.splice(index, 1);
  }
  onCancel(): void {
    this.resetForm();
  }

  private resetForm() {
    this.form.reset();
    this.isEditing = false;
  }
}
