import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import {ServiceConfig} from '../service.config'

@Injectable()
export class AuthService {
  authToken: any;
  user: any; 
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = ServiceConfig.isDev; 

   }

  registerUser(user){
    let headers = new Headers();
    //this.serviceConfig.hosturl
    headers.append('Content-Type','application/json');
    //let ep = this.prepEndpoint('users/register'); 
    let ep =  ServiceConfig.PrepareHost(this.isDev,'users/register') ;
    return this.http.post(ep, user,{headers: headers})
    .map(res => res.json());

    // return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
    //   .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //let ep = this.prepEndpoint('users/authenticate'); 
    let ep =  ServiceConfig.PrepareHost(this.isDev,'users/authenticate') ;
    return this.http.post(ep, user,{headers: headers})
    .map(res => res.json());
    // return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
    //   .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    //let ep = this.prepEndpoint('users/profile'); 
    let ep =  ServiceConfig.PrepareHost(this.isDev,'users/profile') ;
    return this.http.get(ep,{headers: headers})
    .map(res => res.json());
    // return this.http.get('http://localhost:3000/users/profile',{headers: headers})
    //   .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
   // console.log('Token je ' + tokenNotExpired('id_token'));
    return tokenNotExpired('id_token');
    //return tokenNotExpired();
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


  // prepEndpoint(ep){
  //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
  //  return ServiceConfig.PrepareHost(this.isDev,ep);

  //   // if(this.isDev){
  //   //   return ep;
  //   // } else {
  //   //   //return 'http://localhost:8080/'+ep;
  //   //   return ServiceConfig.HostUrl + ep;
  //   // }
  // } 

}
