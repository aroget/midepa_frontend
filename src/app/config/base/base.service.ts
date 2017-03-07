import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// import { API } from '../api';
import { appStorage } from '../../shared/utils/localStorage';

@Injectable()
export class BaseService {

  constructor(
    private http: Http,
    private router?: Router
  ) { }

  get(url: string) {
    let headers = new Headers();
    headers.append('Authorization', `token ${appStorage.get(appStorage.keys.SESSION)}`);

    return this.http.get(url, { headers }).catch(error => this.catchError(error));
  }

  post(url: string, body: any) {
    let headers = new Headers();
    headers.append('Authorization', `token ${appStorage.get(appStorage.keys.SESSION)}`);
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
