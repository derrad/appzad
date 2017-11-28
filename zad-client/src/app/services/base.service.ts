import { Injectable } from '@angular/core';
import { Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ServiceConfig } from './service.config';
import { ResponeCustom} from './../shared/models/ErrorRes';

export class BaseService {

    authToken: any;
    isDev: boolean;
    constructor() {
      this.isDev = ServiceConfig.isDev;
    }

    protected loadToken() {
      const token = localStorage.getItem('id_token');
      this.authToken = token;
    }


    protected handleError(error: Response) {
        if (error.status === 401) {
          console.log(' status ' + error.statusText);
          const servererr = new ResponeCustom();
          servererr.message = error.statusText;
          servererr.success = false;
          servererr.status = error.status;
          servererr.data = [];
          return Observable.throw(servererr);
       }
        const myerror = new ResponeCustom().fromJSON(error.json());
        const servererr = new ResponeCustom();
        servererr.message = 'Server error' + error.statusText;
        servererr.success = false;
        servererr.data = [];
        return Observable.throw(myerror || servererr);

      }

}
