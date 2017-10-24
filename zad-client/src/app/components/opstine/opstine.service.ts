import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { Observable } from 'rxjs/Observable';
import { ServiceConfig } from './../../services/service.config';

@Injectable()
export class OpstineService {
  authToken: any;
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = ServiceConfig.isDev; // Change to false before deployment  sredi ovo

   }


  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getOpstine(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/opstine/' ) ;

    return this.http.get(ep,{headers: headers})
      .map(res => res.json())
      .catch(this.handleError); ;
   
  }
  getOpstina(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');

    let ep = ServiceConfig.PrepareHost(this.isDev,'api/opstine/' +id) ;
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 

  }

  addOpstine(opstina){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');

    let ep = ServiceConfig.PrepareHost(this.isDev,'api/opstine/' ) ;
        
    return this.http.post(ep, JSON.stringify(opstina),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
   
  }

  updateOpstine(opstina){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');

    let ep = ServiceConfig.PrepareHost(this.isDev,'api/opstine/' + opstina._id) ;
    
    return this.http.put(ep, JSON.stringify(opstina),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
     
  }

  delOpstine(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');

    let ep = ServiceConfig.PrepareHost(this.isDev,'api/opstine/' + id) ;
    return this.http.delete(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
    
   
   
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
} 

}
