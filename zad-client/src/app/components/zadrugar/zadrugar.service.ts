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
export class ZadrugarService extends BaseService {

  // authToken: any;
  // isDev: boolean;
  // data: any;
  constructor(private http: Http) {
    // this.isDev = ServiceConfig.isDev; // Change to false before deployment  sredi ovo
    super();
   }

  // loadToken() {
  //   const token = localStorage.getItem('id_token');
  //   this.authToken = token;
  // }

  getZadrugari() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/zadrugar');
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  getPickZadrugari() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/pickzadrugar');
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  getZadrugar(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/zadrugar/' + id) ;
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);

  }

  addZadrugar(tzadrugar) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/zadrugar/') ;
    return this.http.post(ep, JSON.stringify(tzadrugar), {headers: headers})
     .map(res => res.json())
     .catch(this.handleError);
  }

  updateZadrugar(tzadrugar) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep =  ServiceConfig.PrepareHost(this.isDev, 'api/zadrugar/' + tzadrugar._id) ;

    return this.http.put(ep, JSON.stringify(tzadrugar), {headers: headers})
    .map(res => res.json()).catch(this.handleError);

  }

  delZadrugar(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/zadrugar/' + id) ;
    return this.http.delete(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

  getActivZadrugar() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/activzadrugar');
    return this.http.get(ep, {headers: headers})
    .map(res => res.json()).catch(this.handleError);
  }

//   private handleError(error: Response) {
//     const myerror = new ResponeCustom().fromJSON(error.json());
//     const servererr = new ResponeCustom();
//     servererr.message = 'Server error';
//     servererr.success = false;
//     servererr.data = [];
//     return Observable.throw(myerror || servererr);
// }

}
