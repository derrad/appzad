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
export class KonstantaService {

  authToken: any;
  isDev: boolean;
  constructor(private http: Http) {
    this.isDev = ServiceConfig.isDev; // Change to false before deployment  sredi ovo
   }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getKonstante() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/konstanta');
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  getKonstanta(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/konstanta/' + id);
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  addKonstanta(konst) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/konstanta/');
     return this.http.post(ep, JSON.stringify(konst), {headers: headers})
     .map(res => res.json())
     .catch(this.handleError);
  }

  updateKonstanta(konst) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep =  ServiceConfig.PrepareHost(this.isDev, 'api/konstanta/' + konst._id);
     return this.http.put(ep, JSON.stringify(konst), {headers: headers})
     .map(res => res.json()).catch(this.handleError);
  }

  delKonstanta(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/konstanta/' + id) ;
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
