
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { Observable } from 'rxjs/Observable';
import { ServiceConfig } from './../../services/service.config';
//import { Animal, ErrorReq } from './../../shared/Interface/errorinterface';
import { Animal } from './../../shared/Interface/Animal';
import { RestCustom}  from './../../shared/Interface/ErrorReq';

@Injectable()
export class FondSatiService {

  authToken: any;
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = ServiceConfig.isDev; // Change to false before deployment  sredi ovo
   }

   loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getFondSate(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = ServiceConfig.PrepareHost(this.isDev,'api/fondsati') ; 
    return this.http.get(ep,{headers: headers})
    .map(res => res.json()).catch(this.handleError); 
  }
 
 getFondSati(id){
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type','application/json');
  let ep = ServiceConfig.PrepareHost(this.isDev,'api/fondsati/' + id) ;
  return this.http.get(ep,{headers: headers})
  .map(res => res.json()).catch(this.handleError); 

}


addFondSati(fsati){
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type','application/json');
  let ep = ServiceConfig.PrepareHost(this.isDev,'api/fondsati/') ;
  
   return this.http.post(ep, JSON.stringify(fsati),{headers: headers})
   .map(res => res.json()).catch(this.handleError);
 
}

updateFondSati(fsati){
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type','application/json');
  let ep =  ServiceConfig.PrepareHost(this.isDev,'api/fondsati/' + fsati._id) ;
  
  return this.http.put(ep, JSON.stringify(fsati),{headers: headers})
  .map(res => res.json()).catch(this.handleError);
}


delFondSati(id){
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type','application/json');
  let ep = ServiceConfig.PrepareHost(this.isDev,'api/fondsati/' + id) ;
  return this.http.delete(ep,{headers: headers})
  .map(res => res.json()).catch(this.handleError); 
}


//   prepEndpoint(ep){
//      return ServiceConfig.PrepareHost(this.isDev,ep);
//  }

  private handleError(error: Response) {
    let greska =error.status + "  " + error.statusText;
    //  let myerror = new Animal('Pera');
    //  console.log(myerror.move(5));
    
     let myerror = new RestCustom().fromJSON(error.json());
    //  console.log(myerror.getPorukaG());
    //  console.log(myerror.getTextP());
     console.log( "samo status text " + myerror.message);

     
     console.log('error.json' + JSON.stringify(error.json()));

     
    //  myerror.fillFromJSON(JSON.parse(JSON.stringify(error)));

    //console.log("Moj error " + myerror._body.message);
    //   myerror=<IErrorReq> Response;
    // if(myerror._body){
    //   greska =error.status + "  " + error._body.message;
    // }
    let texterror:string= JSON.stringify(error);
    console.log('moj text error' + texterror);
    //console.log(JSON.parse(JSON.stringify(error)));

    //return Observable.throw(error.statusText || 'Server error');
    return Observable.throw(myerror || 'Server error');
} 

}
