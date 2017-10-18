import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { Observable } from 'rxjs/Observable';
import {ServiceConfig} from '../service.config';

@Injectable()
export class KonstanteService {

  authToken: any;
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = ServiceConfig.isDev; // Change to false before deployment  sredi ovo
  }

   loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getKonstants(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
  //  let ep = this.prepEndpoint('api/konstanta'); 
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/konstanta') ;
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
  }

  getKonstant(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/konstanta/' + id) ;
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 

  }

  addKonstant(konstant){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/konstanta/') ;
    
     return this.http.post(ep, JSON.stringify(konstant),{headers: headers})
     .map(res => res.json()).catch(this.handleError);
   
  }

  updateKonstant(konstant){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep =  ServiceConfig.PrepareHost(this.isDev,'api/konstanta/' + konstant._id) ;
    
    return this.http.put(ep, JSON.stringify(konstant),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
   
  }

  delKonstant(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/konstanta/' + id) ;
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
