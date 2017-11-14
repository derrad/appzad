import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { ServiceConfig } from './../../services/service.config';
import { ResponeCustom } from './../../shared/models/ErrorRes';


@Injectable()
export class RadnikService {

  authToken: any;
  isDev: boolean;
  data: any;
  constructor(private http: Http) {
    this.isDev = ServiceConfig.isDev; // Change to false before deployment  sredi ovo
   }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getRadnici() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/radnik') ;
   // console.log("getDrzave link", ep );
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  getRadnik(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/radnik/' + id) ;
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);

  }

  addRadnik(radnik) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/radnik/') ;
     return this.http.post(ep, JSON.stringify(radnik), {headers: headers})
     .map(res => res.json())
     .catch(this.handleError);
  }

  updateRadnik(radnik) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep =  ServiceConfig.PrepareHost(this.isDev, 'api/radnik/' + radnik._id) ;
    return this.http.put(ep, JSON.stringify(radnik), {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  delRadnik(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/radnik/' + id) ;
    return this.http.delete(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  private handleError(error: Response) {
    const myerror = new ResponeCustom().fromJSON(error.json());
    const servererr = new ResponeCustom();
    servererr.message = 'Server error';
    servererr.success = false;
    servererr.data = [];
    return Observable.throw(myerror || servererr);
  }

}
