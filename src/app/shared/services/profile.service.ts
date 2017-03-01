import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { API } from '../../config/api';
import { BaseService } from '../../config/base/base.service';

@Injectable()
export class ProfileService extends BaseService {
  constructor(http: Http) {
      super(http);
      Object.setPrototypeOf(this, ProfileService.prototype);
  }

  getProfile() {
    const url = `${API.BASE_URL}/${API.END_POINTS.BASE}/${API.VERSION}/${API.RESOURCES.PROFILE}`;
    return super.get(url).map(res => res.json());
  }

}
