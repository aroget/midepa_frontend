import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { API } from '../api';
import { appStorage } from '../../shared/utils/localStorage';

@Injectable()
export class BaseService {

  constructor(
    private http: Http,
    private router?: Router
  ) { }

  get(url: string) {
    const headers = API.HEADERS;

    return this.http.get(url, { headers }).catch(error => this.catchError(error));
  }

  post(url: string, body: any) {
    const headers = API.HEADERS;

    return this.http.post(url, body, { headers }).catch(error => this.catchError(error));
  }

  private catchError(err) {
    // if session key is expired
    if (err.status === 401) {
      appStorage.clear();
      this.router.navigate(['/login']);
      return;
    }
    return Observable.throw(err);
  }
};
