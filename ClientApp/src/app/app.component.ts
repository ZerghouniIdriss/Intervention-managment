
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './shared/services/authentication.service';
import { IUser } from './shared/_interfaces/user/iuser.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isAuthenticated: boolean;
  public userName: Observable<IUser>;

  public isUserAuthenticated: boolean;
  isExpanded = false;

  constructor(private _authService: AuthenticationService, private _router: Router) {

    this.userName=this._authService.getCurrentUser();
  
  }

  ngOnInit(): void {
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public logout = () => {
    this._authService.logout();
    this._router.navigate(["/"]);
  }

}
