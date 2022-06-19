import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Clinique } from './clinique.interface';
import { CliniqueService } from './clinique.service';
import { AlertService } from '../shared/_alert/alert.service';

@Component({
  selector: 'app-clinique',
  templateUrl: './clinique.component.html'
})
export class CliniqueComponent {
  public items: Clinique[];
  public isAdding: boolean = false;
  private apiServer;

  constructor(private service: CliniqueService, private formBuilder: FormBuilder, private alertService: AlertService) {
  
  }

  form = this.formBuilder.group({
    id: 0,
    name: ''
  });

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.service.getAll().subscribe((data: Clinique[]) => {
      this.items = data;
    });
  } 

  onSubmit(): void {
    this.service.create(this.form.value).subscribe(res => {
      console.warn('Creation has been submitted', this.form.value);
      this.alertService.success('Clinique crée avec succés', {
        autoClose: true,
        keepAfterRouteChange: false
      })
      this.items.push(res);
      this.resetForm();
    })
  }


  onAdd(): void {
    this.isAdding = true;
  }

  onDelete(index: any): void {
    this.service.delete(index).subscribe(res => {
      this.refreshData();
    });
  }

  onCancel(): void {
    this.resetForm();
  }

  private resetForm() {
    this.form.reset();
    this.form = this.formBuilder.group({
      id: 0,
      name: ''
    });   
    this.isAdding = false;
    this.refreshData();

  }
   
}



