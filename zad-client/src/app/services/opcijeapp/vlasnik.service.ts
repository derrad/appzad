import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { Observable } from 'rxjs/Observable';
import {ServiceConfig} from '../service.config';


@Injectable()
export class VlasnikService {

  authToken: any;
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = ServiceConfig.isDev; // Change to false before deployment  sredi ovo

   }


  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getVlasnici(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('api/vlasnik'); 
   
    return this.http.get(ep,{headers: headers})
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
