import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { ServiceConfig } from './../../services/service.config';
import { BaseService } from './../../services/base.service';

@Injectable()
export class OpstineService extends BaseService {

  constructor(private http: Http) {

    super();
  }

  getOpstine() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/opstine/');

    return this.http.get(ep, { headers: headers })
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPickOpstine() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/pickopstine/');

    return this.http.get(ep, { headers: headers })
      .map(res => res.json())
      .catch(this.handleError);
  }

  getOpstina(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/opstine/' + id);
    return this.http.get(ep, { headers: headers })
      .map(res => res.json()).catch(this.handleError);
  }

  addOpstine(opstina) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/opstine/');
    return this.http.post(ep, JSON.stringify(opstina), { headers: headers })
      .map(res => res.json()).catch(this.handleError);
  }

  updateOpstine(opstina) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/opstine/' + opstina._id);
    return this.http.put(ep, JSON.stringify(opstina), { headers: headers })
      .map(res => res.json()).catch(this.handleError);
  }

  delOpstine(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/opstine/' + id);
    return this.http.delete(ep, { headers: headers })
      .map(res => res.json()).catch(this.handleError);
  }


}
