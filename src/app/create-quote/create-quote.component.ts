import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { environment } from '../../environments/environment';

import {MatSnackBar} from '@angular/material/snack-bar';

import { Router } from '@angular/router';

import { QuotesComponent } from '../quotes/quotes.component';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss']
})
export class CreateQuoteComponent implements OnInit {

	authors;
	content;
	authorId;

  constructor(private dataService: DataService, 
  			  public snackBar: MatSnackBar,
  			  private router: Router) { }

  ngOnInit() {
  	this.dataService.getData(`${environment.api_url}/api/authors`)
  		.subscribe( data => {
  			console.log(data)
  			this.authors = data;
  		})
  }

  saveQuote(){
  	const postData = {
  		content: this.content,
  		authorId: this.authorId
  	}

  	this.dataService.postData(`${environment.api_url}/api/quotes`, postData)
  		.subscribe( data => {
  			console.log(data)
  			this.snackBar.open('Quote created successfully ', 'close')
  			this.router.navigate([QuotesComponent])
  		}, (err) => {
  			this.snackBar.open('Quote: ' + err.error.error.details.messages.content[0], 'close')
  		})		
  }

}
