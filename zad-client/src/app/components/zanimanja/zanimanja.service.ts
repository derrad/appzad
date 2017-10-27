import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { Observable } from 'rxjs/Observable';
import { ServiceConfig } from './../../services/service.config';

@Injectable()
export class ZanimanjaService {

  authToken: any;
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = ServiceConfig.isDev;
   }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getZanimanja(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/zanimanja/') ; 

    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
  }


  getZanimanje(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/zanimanja/' + id) ;
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
  }

  addZanimanje(zanimanje){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/zanimanja/') ;
    
    return this.http.post(ep, JSON.stringify(zanimanje),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }


  updateZanimanje(zanimanje){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep =  ServiceConfig.PrepareHost(this.isDev,'api/zanimanja/' + zanimanje._id) ;
    
    return this.http.put(ep, JSON.stringify(zanimanje),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
    
  }


  delZanimanje(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/zanimanja/' + id) ;
  
    return this.http.delete(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
  }

 private handleError(error: Response) {
    //console.error(" handleError  " + error + "  ovde da vidim moze li jos nesto da se uhvati  " + error.json().message );
    let greska =error.status + "  " + error.statusText;
    //return Observable.throw(error.statusText || 'Server error');
    return Observable.throw(greska || 'Server error');
  } 

}
