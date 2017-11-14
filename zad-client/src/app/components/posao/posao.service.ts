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
export class PosaoService {

  authToken: any;
  isDev: boolean;

  constructor(private http: Http) {
    this.isDev = ServiceConfig.isDev;
   }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getPoslovi() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/posao/');
    return this.http.get(ep, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }
  getPosao(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/posao/' + id);
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  addPosao(posao) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/posao/');
    return this.http.post(ep, JSON.stringify(posao), {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  updatePosao(posao) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', ' application/json');
    const ep =  ServiceConfig.PrepareHost(this.isDev, 'api/posao/' + posao._id);
    return this.http.put(ep, JSON.stringify(posao), {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  delPosao(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/posao/' + id);
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
