import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Intervention } from './intervention.interface';
import { InterventionService } from './intervention.service';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent {

  items: Intervention[];
  isEditing = false;
  isNew = false;
  filterarg = '';
  private form: FormGroup;

  constructor(private service: InterventionService,private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.service.getAll().subscribe((data: Intervention[]) => {
      this.items = data;
    });
  }

  onSubmit(): void {
    if (this.isNew) {
      this.service.create(this.form.value).subscribe(res => {
        console.warn('Creation has been submitted', this.form.value);
        this.items.push(res);
        this.resetForm();
      })
    }
    else {
      this.service.update(this.form.value).subscribe(res => {
        console.warn('Update has been submitted', this.form.value);
        let itemIndex = this.items.findIndex(item => item.id == this.form.value.id);
        this.items[itemIndex] = this.form.value;
        this.resetForm();
      });
    }
  }


  onAdd(): void {
    this.isEditing = true;
    this.isNew = true;
    setTimeout(() => {
      this.form = this.formBuilder.group({
        id: 0,
        f_Name: '',
        l_Name: '',
        admission_Date: '',
        clinique: 5,
        ref: '',
        motif: '',
        status: 0
      });
    });

  }

  onDelete(index): void {
    this.service.delete(index).subscribe(res => {
      this.items.splice(index, 1);
    });
  }

  onCancel(): void {
    this.resetForm();
  }

  onEdit(item): void {
    this.form = this.formBuilder.group({
      id: item.id,
      f_Name: item.f_Name,
      l_Name: item.l_Name,
      admission_Date: item.admission_Date,
      clinique: item.clinique,
      ref: item.ref,
      motif: item.motif,
      status: item.status
    });
    this.isEditing = true;
  }

  

 


  private resetForm() {
    this.form.reset();
    this.isNew = false;
    this.isEditing = false;
  }



}
