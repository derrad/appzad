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
export class RadnikService extends BaseService {

  constructor(private http: Http) {

    super();
  }

  getRadnici() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/radnik');
    // console.log("getDrzave link", ep );
    return this.http.get(ep, { headers: headers })
      .map(res => res.json()).catch(this.handleError);
  }

  getRadnik(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/radnik/' + id);
    return this.http.get(ep, { headers: headers })
      .map(res => res.json()).catch(this.handleError);

  }

  addRadnik(radnik) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/radnik/');
    return this.http.post(ep, JSON.stringify(radnik), { headers: headers })
      .map(res => res.json())
      .catch(this.handleError);
  }

  updateRadnik(radnik) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/radnik/' + radnik._id);
    return this.http.put(ep, JSON.stringify(radnik), { headers: headers })
      .map(res => res.json()).catch(this.handleError);
  }

  delRadnik(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/radnik/' + id);
    return this.http.delete(ep, { headers: headers })
      .map(res => res.json()).catch(this.handleError);
  }

}
