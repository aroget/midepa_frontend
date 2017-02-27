import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { API } from '../../../config/api';
import { BaseService } from '../../../config/base/base.service';

@Injectable()
export class InquilinosService extends BaseService {
  constructor(http: Http) {
      super(http);
      Object.setPrototypeOf(this, InquilinosService.prototype);
  }

  getInquilinos() {
      const url = `${API.BASE_URL}/${API.END_POINTS.BASE}/${API.VERSION}/${API.RESOURCES.INQUILINOS}`;

      return super.get(url).map(res => res.json());
  }

  createInqilinos(body: any) {
      const url = `${API.BASE_URL}/${API.END_POINTS.BASE}/${API.VERSION}/${API.RESOURCES.REGISTER}`;

      return super.post(url, body).map(res => res.json());
  }
}
