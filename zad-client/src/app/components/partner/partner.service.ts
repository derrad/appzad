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
export class PartnerService extends BaseService {

  constructor(private http: Http) {
    super();
  }


  getPartneri() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/partner');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json()).catch(this.handleError);
  }

  getPartner(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/partner/' + id);
    return this.http.get(ep, { headers: headers })
      .map(res => res.json()).catch(this.handleError);

  }

  addPartner(tpartner) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/partner/');
    return this.http.post(ep, JSON.stringify(tpartner), { headers: headers })
      .map(res => res.json())
      .catch(this.handleError);
  }

  updatePartner(tpartner) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/partner/' + tpartner._id);

    return this.http.put(ep, JSON.stringify(tpartner), { headers: headers })
      .map(res => res.json()).catch(this.handleError);

  }

  delPartner(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/partner/' + id);
    return this.http.delete(ep, { headers: headers })
      .map(res => res.json()).catch(this.handleError);
  }


  getActivPartner() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/activpartner');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json()).catch(this.handleError);
  }

  getPickPartner() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/pickpartner');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json()).catch(this.handleError);
  }
}
