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
export class PartnerService {

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

  getPartneri(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/partner') ; 
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
  }

  
  getPartner(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/partner/' + id) ;
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 

  }

  addPartner(tpartner){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/partner/') ;
    //console.log("add partner" + JSON.stringify(tpartner));    

     return this.http.post(ep, JSON.stringify(tpartner),{headers: headers})
     .map(res => res.json())
     .catch(this.handleError);
   
  }

  updatePartner(tpartner){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep =  ServiceConfig.PrepareHost(this.isDev,'api/partner/' + tpartner._id) ;
    
    return this.http.put(ep, JSON.stringify(tpartner),{headers: headers})
    .map(res => res.json()).catch(this.handleError);
  
  }

  delPartner(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/partner/' + id) ;
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
