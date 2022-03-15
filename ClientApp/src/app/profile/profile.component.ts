import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../shared/services/authentication.service';
import { IUser } from '../shared/_interfaces/user/iuser.interface';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  isEditing = false;
  filterarg = '';
  panelOpenState = false;
  profile: IUser;


  constructor(private service: ProfileService, private authenticationService: AuthenticationService, private formBuilder: FormBuilder) {
  }

  form = this.formBuilder.group({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',

  });

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.authenticationService.getCurrentUser().subscribe((data: IUser) => {
    //this.profile = data;
     this.form.patchValue({
       id: data.id,
       firstName: data.firstName,
       lastName: data.lastName,
       email: data.name
     });
    });
  }

  onSubmit(): void {
    this.service.updateCurrentUser(this.form.value).subscribe(res => {
      console.warn('Update has been submitted', this.form.value);
      this.resetForm();
    });

  }


  onAdd(): void {
    this.isEditing = true;
    setTimeout(() => {
      this.form = this.formBuilder.group({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
      });
    });

  }


  onCancel(): void {
    this.resetForm();
  }

  onEdit(item): void {
    this.form = this.formBuilder.group(item);
    this.isEditing = true;
  }



  private resetForm() {
    this.form.reset();
    this.isEditing = false;
  }
}
