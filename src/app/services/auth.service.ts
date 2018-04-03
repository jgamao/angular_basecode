import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  	'Cache-Control': 'no-cache',
  	'Access-Control-Allow-Origin': '*',		
  })
};

@Injectable()
export class AuthService {
  errors = {};

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(private router: Router, private http: HttpClient) { }

  login(user) {
    this.http.post(`http://localhost:8000/auth/login?email_address=${user.email_address}&password=${user.password}`, '',  httpOptions)
  		.subscribe(
		    response => {
		      localStorage.setItem('access_token', response['access_token']);
		      this.redirectUrl ='admin';
		      this.router.navigate(['admin']);
		    },
		    error => {
		    	this.errors = error;
		    }
  		);
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }
}