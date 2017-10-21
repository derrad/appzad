import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { Observable } from 'rxjs/Observable';
import {ServiceConfig} from '../service.config';

@Injectable()
export class ParametarService {

  authToken: any;
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = ServiceConfig.isDev; // Change to false before deployment  sredi ovo
   }

   loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getParametars(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
  //  let ep = this.prepEndpoint('api/parametar'); 
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/parametar/') ;
  
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
    
  }

  getParametar(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    //let ep = this.prepEndpoint('api/parametar/'+id);
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/parametar/'+id) ;
  
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
  
  }

  addParametar(param){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    //let ep = this.prepEndpoint('api/parametar');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/parametar/') ;

    return this.http.post(ep, JSON.stringify(param),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
  
  }

  updateParametar(param){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
   // let ep = this.prepEndpoint('api/parametar/' + param._id);
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/parametar/' + param._id) ;
    
    return this.http.put(ep, JSON.stringify(param),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  delParametar(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    //let ep = this.prepEndpoint('api/parametar/'+id);
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/parametar/' + id) ;
    return this.http.delete(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
    
  }


  // prepEndpoint(ep){
  // //  console.log(ServiceConfig.PrepareHost(this.isDev,ep));
  //   return ServiceConfig.PrepareHost(this.isDev,ep);
 
  // }

  private handleError(error: Response) {
    console.error("handleError "  + error);
    //console.error("handleError +"  + error.json().error);
    if (!error.ok){
      console.error("handleError greska text statusText "  + error.statusText);
    }
    return Observable.throw(error.json() || 'Server error');
} 

}
