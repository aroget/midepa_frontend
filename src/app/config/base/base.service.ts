import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { API } from '../api';

@Injectable()
export class BaseService {

  constructor(private http: Http) { }

  get(url: string) {
    const headers = API.HEADERS;

    return this.http.get(url, { headers }).catch(error => this.catchEerror(error));
  }

  post(url: string, body: any) {
    const headers = API.HEADERS;

    return this.http.post(url, body, { headers }).catch(error => this.catchEerror(error));
  }

  private catchEerror(error) {
    return Observable.throw(new Error(error));
  }
};
