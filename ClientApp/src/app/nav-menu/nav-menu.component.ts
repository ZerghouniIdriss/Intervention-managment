import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  public isAuthenticated: boolean;
  public userName: string;

  public isUserAuthenticated: boolean;
  isExpanded = false;

  constructor(private _authService: AuthenticationService, private _router: Router) {
  
}

  ngOnInit(): void { 
      this._authService.getCurrentUser()
      .subscribe(res => {
        this.userName = res.lastName.substring(0, 1) + ". " + res.firstName;
    })
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
