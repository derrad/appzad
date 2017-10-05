import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { Observable } from 'rxjs/Observable';
import {ServiceConfig} from '../service.config';


@Injectable()
export class DrzaveService {
  authToken: any;
  //drzave: any; 
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = ServiceConfig.isDev; // Change to false before deployment  sredi ovo

   }


  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getDrzave(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('api/drzave'); 
   // console.log("getDrzave link", ep );
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); ;
 
  }

  getDrzava(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('api/drzave/'+id);
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 

  }


  addDrzava(drzava){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('api/drzave');
    
    return this.http.post(ep, JSON.stringify(drzava),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
   
  }

updateDrzava(drzava){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('api/drzave/' + drzava._id);
    
    return this.http.put(ep, JSON.stringify(drzava),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
  
   
  }

  delDrzava(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('api/drzave/'+id);
    return this.http.delete(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
    
   
   
  }


  prepEndpoint(ep){
  //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
    return ServiceConfig.PrepareHost(this.isDev,ep);
 
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
} 


}
