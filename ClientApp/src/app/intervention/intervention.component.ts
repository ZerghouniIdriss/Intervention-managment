import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Intervention } from './intervention.interface';
import { InterventionService } from './intervention.service';
import { Clinique } from '../clinique/clinique.interface';
import { SharedService } from '../shared/shared.service';
import { DropDownItem } from '../shared/shared.interfaces';

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

  mutualiste_options: string[] = [  'Mary', 'Shelley',  'Igor'];

  cliniqueList: Clinique[];

  statusList: DropDownItem[]=[{
    id:1,
    name:"R"
   },
   {
    id:2,
    name:"N/R"
   },

  ];



  constructor(private service: InterventionService, private sharedService: SharedService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.refreshData();
    this.sharedService.getCliniques().subscribe((data: Clinique[]) => {
      this.cliniqueList = data
    })
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
        clinique: 0,
        ref: '',
        motif: '',
        diag: '',
        examen_Clinique: '',
        radiologie: '',
        operateur: '',
        mutualiste: '',
        conclusion: '',
        maj: '',
        honoraire: 0,
        remise: 0,
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
    this.form = this.formBuilder.group(item

    );
    this.isEditing = true;
  }



  private resetForm() {
    this.form.reset();
    this.isNew = false;
    this.isEditing = false;
  }
}
