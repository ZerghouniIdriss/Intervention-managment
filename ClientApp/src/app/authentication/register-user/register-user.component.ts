import { AuthenticationService } from './../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserForRegistrationDto } from '../../shared/_interfaces/user/UserForRegistrationDto';
import { PasswordConfirmationValidatorService } from '../../shared/custom-validators/password-confirmation-validator.service';
import {  Router } from '@angular/router';
import { AlertService } from '../../shared/_alert/alert.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public registerForm: FormGroup;
  public errorMessage: string = '';
  public showError: boolean;
  constructor(private _authService: AuthenticationService, private _passConfValidator: PasswordConfirmationValidatorService, private _router: Router, protected alertService: AlertService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('')
    });
    this.registerForm.get('confirm').setValidators([Validators.required,
    this._passConfValidator.validateConfirmPassword(this.registerForm.get('password'))]);
  }

  public validateControl = (controlName: string) => {
    return this.registerForm.controls[controlName].invalid && this.registerForm.controls[controlName].touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName)
  }

  public registerUser = (registerFormValue) => {
    this.showError = false;
    const formValues = { ...registerFormValue };

    const user: UserForRegistrationDto = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirm
    };


    this._authService.registerUser(user)
      .subscribe(_ => {
        console.log("Successful registration");
        this.alertService.success('Votre compte a été créé avec succès', {
          autoClose: true,
          keepAfterRouteChange: true
        })

        this._router.navigate(["/authentication/login"]);
      },
        error => {
          console.log(error);
          this.errorMessage = error;
          this.showError = true;
        })
  }
}
