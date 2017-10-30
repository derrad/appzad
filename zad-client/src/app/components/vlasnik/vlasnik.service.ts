import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { Observable } from 'rxjs/Observable';
import { ServiceConfig } from './../../services/service.config';
import { ResponeCustom}  from './../../shared/models/ErrorRes';

@Injectable()
export class VlasnikService {

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

  getVlasn(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/vlasnik') ; 

    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
  }

  
  getVlasnik(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/vlasnik/' + id) ;
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 

  }

  addVlasnik(vlasn){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/vlasnik/') ;
        
     return this.http.post(ep, JSON.stringify(vlasn),{headers: headers})
     .map(res => res.json())
     .catch(this.handleError);
   
  }

  updateVlasnik(vlasn){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep =  ServiceConfig.PrepareHost(this.isDev,'api/vlasnik/' + vlasn._id) ;
    
    return this.http.put(ep, JSON.stringify(vlasn),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
  
  }

  delVlasnik(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/vlasnik/' + id) ;
    return this.http.delete(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
  }



  private handleError(error: Response) {
    let myerror = new ResponeCustom().fromJSON(error.json());
    let servererr = new ResponeCustom();
    servererr.message='Server error';
    servererr.success=false;
    servererr.data=[];
    
    return Observable.throw(myerror || servererr);
} 



}
