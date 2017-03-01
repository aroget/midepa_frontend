import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { API } from '../../config/api';

@Injectable()
export class AuthService {
  constructor(private http: Http) { }

  login(body) {
    const url = `${API.BASE_URL}/${API.END_POINTS.AUTH}/${API.RESOURCES.LOGIN}`;
    return this.http.post(url, body).map(res => res.json());
  }
}
