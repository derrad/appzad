
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { ServiceConfig } from './../../services/service.config';
import { ResponeCustom} from './../../shared/models/ErrorRes';

@Injectable()
export class FondSatiService {

  authToken: any;
  isDev: boolean;

  constructor(private http: Http) {
    this.isDev = ServiceConfig.isDev;
   }

   loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getFondSate() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/fondsati');
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

 getFondSati(id) {
  const headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  const ep = ServiceConfig.PrepareHost(this.isDev, 'api/fondsati/' + id) ;
  return this.http.get(ep, {headers: headers})
  .map(res => res.json()).catch(this.handleError);

}


addFondSati(fsati) {
  const headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  const ep = ServiceConfig.PrepareHost(this.isDev, 'api/fondsati/');
   return this.http.post(ep, JSON.stringify(fsati), {headers: headers})
   .map(res => res.json()).catch(this.handleError);
}

updateFondSati(fsati) {
  const headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  const ep =  ServiceConfig.PrepareHost(this.isDev, 'api/fondsati/' + fsati._id) ;
  return this.http.put(ep, JSON.stringify(fsati), {headers: headers})
  .map(res => res.json()).catch(this.handleError);
}


delFondSati(id) {
  const headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  const ep = ServiceConfig.PrepareHost(this.isDev, 'api/fondsati/' + id) ;
  return this.http.delete(ep, {headers: headers})
  .map(res => res.json()).catch(this.handleError);
}

private handleError(error: Response) {
  console.log('fond-sati status ' + error.statusText + ' kod je' + error.status);
  if (error.status === 401) {
     console.log(' status ' + error.statusText);
     const servererr = new ResponeCustom();
     servererr.message = error.statusText;
     servererr.success = false;
     servererr.status = error.status;
     servererr.data = [];
     return Observable.throw(servererr);
  }
  const myerror = new ResponeCustom().fromJSON(error.json());
  const servererr = new ResponeCustom();
  servererr.message = 'Server error';
  servererr.success = false;
  servererr.data = [];
  return Observable.throw(myerror || servererr);
}

}
