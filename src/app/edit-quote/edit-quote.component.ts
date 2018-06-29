import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import 'rxjs/add/operator/map';
import { DataService } from '../data.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { QuotesComponent } from '../quotes/quotes.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.scss']
})
export class EditQuoteComponent implements OnInit {

	id;
	authors;
	content;
	authorId;

  constructor(private route: ActivatedRoute, 
  			  private dataService: DataService,
  			  private router: Router,
          private authService: AuthService) {
  	this.route.params.subscribe( data => {
  		console.log(data)
  		this.id = data.id;
  	})
  }

  ngOnInit() {
  	this.dataService.getData(`${environment.api_url}/api/quotes/${this.id}`)
  		.subscribe( data => {
  			console.log(data)
  			this.content = data['content'];
  			this.authorId = data['authorId'];
  		})
  		this.dataService.getData(`${environment.api_url}/api/authors`)
  		.subscribe( data => {
  			console.log(data)
  			this.authors = data;
  		})
  }

  updateQuote() {
  	const editData = {
  		content: this.content,
  		authorId: this.authorId
  	}

    const accessToken = this.authService.getAccessToken();

  	this.dataService.updateData(`${environment.api_url}/api/quotes/${this.id}?access_token=${accessToken}`, editData)
  		.subscribe( data => {
  			console.log(data)
  			this.router.navigate([QuotesComponent])
  		})	
  }

}
