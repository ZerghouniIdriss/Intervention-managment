import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Intervention } from './intervention.interface';
import { InterventionService } from './intervention.service';
import { Clinique } from '../clinique/clinique.interface';
import { SharedService } from '../shared/services/shared.service';
import { DropDownItem } from '../shared/_interfaces/drop-down-item.interfaces';
import { AlertService } from '../shared/_alert/alert.service';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent {
  form: FormGroup;
  items: Intervention[];
  isEditing = false;
  isNew = false;
  filterarg = '';
  panelOpenState = false;

  motifs_options: string[] = ['CPA', 'BLOCK', 'HOSPIT', 'URGENCE'];

  mutualiste_options: string[] = ['PAYANT', 'Cnss', 'Cnops', 'Far'];
 
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
  selectedClinique=-1;


  constructor(private service: InterventionService, private sharedService: SharedService, private formBuilder: FormBuilder, protected alertService: AlertService) {
  }

  initializeForm() {
    return this.formBuilder.group({
      id: 0,
      f_Name: '',
      l_Name: '',
      age: 0,
      admission_Date: '',
      sortie_Date: '',
      clinique: 0,
      ref: '',
      motif: '',
      diag: '',
      examen_Clinique: '',
      biologie_hb: '',
      biologie_gb: '',
      biologie_plg: '',
      biologie_uree: '',
      biologie_crea: '',
      biologie_na: '',
      biologie_k: '',
      biologie_ca: '',
      biologie_glycemie: '',
      biologie_tp: '',
      biologie_inr: '',
      biologie_tck: '',
      biologie_crp: '',
      biologie_other: '',
      radiologie: '',
      operateur: '',
      mutualiste: '',
      conclusion: '',
      maj: '',
      rg: '',
      nr: '',
      honoraire: 0,
      remise: 0,
      status: 1,

    });

  }
  
  ngOnInit() {
    this.form = this.initializeForm();
    this.refreshData();
    this.clearFilter();
    this.sharedService.getCliniques().subscribe((data: Clinique[]) => {
      this.cliniqueList = data,
        this.cliniqueList.unshift({
          id:-1,
          name:"Toutes les cliniques"
        })
    })
  }

  refreshData() {
    this.service.getAll().subscribe((data: Intervention[]) => {
      if (this.selectedClinique > -1) {
        this.items = data.filter(i => i.clinique === this.selectedClinique);
      } else {
        this.items = data;
      }
    });
  }

  clearFilter(): void{
  this.selectedClinique = -1;
}
  onSubmit(): void {
    if (this.isNew) {
      this.service.create(this.form.value).subscribe(res => {
        console.warn('Creation has been submitted', this.form.value);
         this.alertService.success('Intervention crée avec succés', {
          autoClose: true,
          keepAfterRouteChange: false
        })
        this.resetForm();
        this.refreshData();

      })
    }
    else {
      this.service.update(this.form.value).subscribe(res => {
        console.warn('Update has been submitted', this.form.value);
        this.alertService.success('Intervention modifiée avec succés', {
          autoClose: true,
          keepAfterRouteChange: false
        })
        this.resetForm();
        this.refreshData();
      });
    }
  }


  onAdd(): void {
    this.isEditing = true;
    this.isNew = true;
    setTimeout(() => {
      this.form = this.initializeForm();
    });

  }

  onDelete(index): void {
    this.service.delete(index).subscribe(res => {
      this.refreshData();
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

  onCliniqueChange(clinique): void {
    console.log(this.selectedClinique);
      this.selectedClinique = clinique.value;
      this.refreshData();
  }
 

  private resetForm() {
    this.form.reset();
    this.initializeForm();
    this.isNew = false;
    this.isEditing = false;
  }
}
