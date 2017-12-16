import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { ServiceConfig } from './../../services/service.config';
import { BaseService } from './../../services/base.service';

@Injectable()
export class UputService extends BaseService {

  constructor(private http: Http) {

    super();
  }

  getUputi() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/uput');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json()).catch(this.handleError);
  }


  getUput(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/uput/' + id);
    return this.http.get(ep, { headers: headers })
      .map(res => res.json()).catch(this.handleError);

  }

  addUput(tuput) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/uput/');
    return this.http.post(ep, JSON.stringify(tuput), { headers: headers })
      .map(res => res.json())
      .catch(this.handleError);
  }

  updateUput(tuput) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/uput/' + tuput._id);

    return this.http.put(ep, JSON.stringify(tuput), { headers: headers })
      .map(res => res.json()).catch(this.handleError);

  }

  delUput(id) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/uput/' + id);
    return this.http.delete(ep, { headers: headers })
      .map(res => res.json()).catch(this.handleError);
  }


  getUputBrojGod(tdatum) {
    // console.log(' parametar je u servicu ' + JSON.stringify(tdatum));
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = ServiceConfig.PrepareHost(this.isDev, 'api/maxbroj');
    return this.http.post(ep, JSON.stringify(tdatum), { headers: headers })
      .map(res => res.json())
      .catch(this.handleError);
  }

}
