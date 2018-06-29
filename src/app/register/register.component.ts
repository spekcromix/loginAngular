import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { environment } from '../../environments/environment';

import {MatSnackBar} from '@angular/material/snack-bar';

import { Router } from '@angular/router';

import { QuotesComponent } from '../quotes/quotes.component';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	username: string;
	email: string;
	password: string;

  constructor(private dataService: DataService, 
  			  public snackBar: MatSnackBar,
  			  private router: Router,
          	  private authService: AuthService
   ) { }

  ngOnInit() {
  }

  saveUser(){
  	const postUser = {
  		username: this.username,
  		email: this.email,
  		password: this.password
  	}

  	this.dataService.postData(`${environment.api_url}/api/Users`, postUser)
  		.subscribe( data => {
  			console.log(data)
  			this.snackBar.open('User ' + this.username + ' register successfully ', 'close')
  			this.router.navigateByUrl('/login')
  		}, (err) => {
  			this.snackBar.open('User: ' + err.error.error.details.messages.content[0], 'close')
  		})		
  }

}
