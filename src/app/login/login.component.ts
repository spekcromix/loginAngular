import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

import { Router } from '@angular/router';

import { QuotesComponent } from '../quotes/quotes.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email;
	password;

  constructor(private authService: AuthService, private router: Router) {
  	if(authService.isLoggedIn()) {
  		this.router.navigate([QuotesComponent])
  	}
  }

  ngOnInit() {
  }

  login() {
  	const postData = {
  		email: this.email,
  		password: this.password
  	}

  	this.authService.login(postData)
  		.subscribe( data => {
  			localStorage.setItem('quotesAngularToken', JSON.stringify(data));
  			this.router.navigate([QuotesComponent])
  		})
  }

}
