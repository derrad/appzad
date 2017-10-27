import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { Observable } from 'rxjs/Observable';
import { ServiceConfig } from './../../services/service.config';


@Injectable()
export class PosaoService {

  authToken: any;
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = ServiceConfig.isDev;
   }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  
  getPoslovi(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/posao/') ;
    return this.http.get(ep,{headers: headers})
      .map(res => res.json())
      .catch(this.handleError); ;
   
  }
  getPosao(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/posao/' + id) ;
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
  }

  addPosao(posao){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/posao/') ;
    
    return this.http.post(ep, JSON.stringify(posao),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  updatePosao(posao){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep =  ServiceConfig.PrepareHost(this.isDev,'api/posao/' + posao._id) ;
    
    return this.http.put(ep, JSON.stringify(posao),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
    
  }

  delPosao(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/posao/' + id) ;
  
    return this.http.delete(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
  }



  private handleError(error: Response) {
    // console.error(" handleError  " + error + "  ovde da vidim moze li jos nesto da se uhvati  " + error.json().message );
     let greska =error.status + "  " + error.statusText;
     //return Observable.throw(error.statusText || 'Server error');
     return Observable.throw(greska || 'Server error');
 } 

}
