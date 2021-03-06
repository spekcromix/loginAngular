import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment  } from '../../environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

	quotes;
	pageLength: number;
	pageSize = 5;
  isLoggedIn;

  constructor(private dataService: DataService, private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn()
  }

  ngOnInit() {
  	this.dataService.getData(`${environment.api_url}/api/Quotes?filter[include]=author&filter[limit]=${this.pageSize}`).subscribe(data => {
  		this.quotes = data;
      console.log(data)
  	})

  	this.dataService.getData(`${environment.api_url}/api/Quotes/count`).subscribe(data => {
  		this.pageLength = data['count'];
  	})
  }

  pageEvent(ev) {
  	const pageIndex = ev.pageIndex;
  	const pageSize = ev.pageSize;
  	const skip = pageIndex * pageSize;

  	this.dataService.getData(`${environment.api_url}/api/Quotes?filter[include]=author&filter[limit]=${pageSize}&filter[skip]=${skip}`).subscribe(data => {
  		console.log(data);
  		this.quotes = data;
  	})
  }

  deleteQuote(id, index) {
    const accessToken = this.authService.getAccessToken();
    this.dataService.deleteData(`${environment.api_url}/api/Quotes/${id}?access_token=${accessToken}`).subscribe(data => {
      this.quotes.splice(index, 1)
    })
  }

}
