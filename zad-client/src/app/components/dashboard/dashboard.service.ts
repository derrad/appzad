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
export class DashboardService  extends BaseService {
  // authToken: any;
  // isDev: boolean;

  constructor(private http: Http) {
    // this.isDev = ServiceConfig.isDev; // Change to false before deployment  sredi ovo
    super();
   }


  // loadToken() {
  //   const token = localStorage.getItem('id_token');
  //   this.authToken = token;
  // }

  getPosaoCount() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/countposaoall' ) ;
   // console.log("getDrzave link", ep );
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  getActivPosaoCount() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/countActivposao' ) ;
   // console.log("getDrzave link", ep );
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }


  getKupciCount() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/countkupciall') ;
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  getActivKupciCount() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/countactivpartner') ;
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  getUputKupciCount() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/countpartneruput') ;
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  getZadrugariCount() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/countzadrugarall') ;
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  getActivZadCount() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/countactivzadrugar') ;
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }


  getUputCountAll() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/countuputall') ;
    return this.http.get(ep, {headers: headers})
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
  //   servererr.message = 'Server error';
  //   servererr.success = false;
  //   servererr.data = [];
  //   return Observable.throw(myerror || servererr);
  // }

}
