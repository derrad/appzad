import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { ServiceConfig } from './../../services/service.config';
import { BaseService } from './../../services/base.service';


@Injectable()
export class DrzaveService  extends BaseService  {

  constructor(private http: Http) {
    super();
   }

  getDrzave() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/drzave/' ) ;
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  getPickDrzave() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/pickdrzave/' ) ;
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  getDrzava(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/drzave/' + id) ;
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }
  addDrzava(drzava) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/drzave/' ) ;
    return this.http.post(ep, JSON.stringify(drzava), {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

updateDrzava(drzava) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/drzave/' + drzava._id);
    return this.http.put(ep, JSON.stringify(drzava), {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  delDrzava(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/drzave/' + id) ;
    return this.http.delete(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }
}
