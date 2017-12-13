import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { ServiceConfig } from './../../services/service.config';
import { ResponeCustom} from './../../shared/models/ErrorRes';
import { BaseService } from './../../services/base.service';

@Injectable()
export class ZanimanjaService extends BaseService {
  // authToken: any;
  // isDev: boolean;
  constructor(private http: Http) {
    super();
    // this.isDev = ServiceConfig.isDev;
   }

  // loadToken() {
  //   const token = localStorage.getItem('id_token');
  //   this.authToken = token;
  // }

  getZanimanja() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/zanimanja/');

    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }


  getZanimanje(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/zanimanja/' + id);
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  addZanimanje(zanimanje) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/zanimanja/');
    return this.http.post(ep, JSON.stringify(zanimanje), {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }


  updateZanimanje(zanimanje) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep =  ServiceConfig.PrepareHost(this.isDev, 'api/zanimanja/' + zanimanje._id);
    return this.http.put(ep, JSON.stringify(zanimanje), {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }


  delZanimanje(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/zanimanja/' + id);
    return this.http.delete(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

}
