import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable()
export class AuthService {

  constructor(public http: HttpClient) { }

  isLoggedIn(){
  	return localStorage.getItem('quotesAngularToken') ? true : false;
  }


  login(data){
  	const headers = new HttpHeaders({
  		'Content-type': 'application/json'
  	});

  	return this.http.post(`${environment.api_url}/api/Users/login`, data, {headers: headers })
  }

  logout(){
    let accessToken;
    if(localStorage.getItem('quotesAngularToken')) {
      accessToken = JSON.parse(localStorage.getItem('quotesAngularToken')).id;
    }
    return this.http.post(`${environment.api_url}/api/Users/logout?access_token=${accessToken}`, {})
  }

}
