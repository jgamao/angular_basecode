import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public user = new User('','');
  public errorMsg = '';
	bodyClasses = 'login-page';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(private _service:AuthService) { }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('login-page');
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('login-page');
  }

  login() {
    if (!this._service.login(this.user)){
      this.errorMsg = 'Failed to login';
    }
  }
}
