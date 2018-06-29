import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { countrys } from '../countrys';

import { DataService } from '../data.service';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent implements OnInit {

  countrys: any;
  multi: any[];
  countryId;

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private dataService: DataService) {
  	
    Object.assign(this, { countrys })
    //console.log( this.countrys )
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  	// this.dataService.getData(`${environment.api_url}/api/Countries`)
  	// 	.subscribe( data => {
  	// 		console.log(data)
  	// 		this.countrys = data;
  	// 	})
  }

  saveAuthor(){

  }

}
