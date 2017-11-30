import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { ServiceConfig } from './../../services/service.config';
// import { ResponeCustom } from './../../shared/models/ErrorRes';
import { BaseService } from './../../services/base.service';

@Injectable()
export class MestaService extends BaseService {
  // authToken: any;
  // isDev: boolean;

  constructor(private http: Http) {
    // this.isDev = ServiceConfig.isDev; // Change to false before deployment  sredi ovo
    super();
  }
  //  loadToken() {
  //   const token = localStorage.getItem('id_token');
  //   this.authToken = token;
  // }
  getMesta() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/mesta/') ;
    return this.http.get(ep, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPickMesta() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/pickmesta/') ;
    return this.http.get(ep, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }


  getMesto(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/mesta/' + id) ;
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  addMesto(mesto) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/mesta/');
    return this.http.post(ep, JSON.stringify(mesto), {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  updateMesto(mesto) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep =  ServiceConfig.PrepareHost(this.isDev, 'api/mesta/' + mesto._id);
    return this.http.put(ep, JSON.stringify(mesto), {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  delMesto(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/mesta/' + id);
    return this.http.delete(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  // private handleError(error: Response) {
  //   if (error.status === 401) {
  //     console.log(' status ' + error.statusText);
  //     const servererr = new ResponeCustom();
  //     servererr.message = error.statusText;
  //     servererr.success = false;
  //     servererr.status = error.status;
  //     servererr.data = [];
  //     return Observable.throw(servererr);
  //  }
  //   const myerror = new ResponeCustom().fromJSON(error.json());
  //   const servererr = new ResponeCustom();
  //   servererr.message = 'Server error' + error.statusText;
  //   servererr.success = false;
  //   servererr.data = [];
  //   return Observable.throw(myerror || servererr);
  // }
}
