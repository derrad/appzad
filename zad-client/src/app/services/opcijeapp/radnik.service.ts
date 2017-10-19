import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { Observable } from 'rxjs/Observable';
import {ServiceConfig} from '../service.config';


@Injectable()
export class RadnikService {

  authToken: any;
  isDev:boolean;
  data:any;
  constructor(private http:Http) {
    this.isDev = ServiceConfig.isDev; // Change to false before deployment  sredi ovo
   }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getRadnici(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/radnik') ; //this.prepEndpoint('api/radnik'); 
   // console.log("getDrzave link", ep );
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
  }

  
  getRadnik(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/radnik/' + id) ;
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 

  }

  addRadnik(radnik){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/radnik/') ;
        
     return this.http.post(ep, JSON.stringify(radnik),{headers: headers})
     .map(res => res.json())
     .catch(this.handleError);
   
  }

  updateRadnik(radnik){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep =  ServiceConfig.PrepareHost(this.isDev,'api/radnik/' + radnik._id) ;
    
    return this.http.put(ep, JSON.stringify(radnik),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
  
  }

  delRadnik(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/radnik/' + id) ;
    return this.http.delete(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
  }

  // prepEndpoint(ep){
  // //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
  //   return ServiceConfig.PrepareHost(this.isDev,ep);
 
  // }

  private handleError(error: Response) {
    console.error(" handleError  " + error + "  ovde da vidim moze li jos nesto da se uhvati  " + error.json().message );
    let greska =error.status + "  " + error.statusText;
    //return Observable.throw(error.statusText || 'Server error');
    return Observable.throw(greska || 'Server error');
} 

}
