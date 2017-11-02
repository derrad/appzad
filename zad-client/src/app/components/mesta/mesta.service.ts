import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { Observable } from 'rxjs/Observable';
import { ServiceConfig } from './../../services/service.config';

@Injectable()
export class MestaService {

  authToken: any;
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = ServiceConfig.isDev; // Change to false before deployment  sredi ovo
   }


  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getMesta(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/mesta/') ; //this.prepEndpoint('api/mesta'); 
   // console.log("getDrzave link", ep );
    return this.http.get(ep,{headers: headers})
      .map(res => res.json())
      .catch(this.handleError); ;
   
  }

  getMesto(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/mesta/' + id) ;
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 

  }

  addMesto(mesto){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/mesta/') ;
    
    return this.http.post(ep, JSON.stringify(mesto),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
   
  }

  updateMesto(mesto){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep =  ServiceConfig.PrepareHost(this.isDev,'api/mesta/' + mesto._id) ;
    
    return this.http.put(ep, JSON.stringify(mesto),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
  
   
  }

  delMesto(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/mesta/' + id) ;// this.prepEndpoint('api/drzave/'+id);
    return this.http.delete(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
  }



  // prepEndpoint(ep){
  // //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
  //   return ServiceConfig.PrepareHost(this.isDev,ep);
 
  // }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
} 


}