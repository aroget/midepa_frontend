import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { API } from '../../config/api';
import { BaseService } from '../../config/base/base.service';

@Injectable()
export class PresupuesotsService extends BaseService {
  constructor(http: Http) {
      super(http);
      Object.setPrototypeOf(this, PresupuesotsService.prototype);
  }

  getPresupuestos() {
    const url = `${API.BASE_URL}/${API.END_POINTS.BASE}/${API.VERSION}/${API.RESOURCES.PRESUPUESTO}`;
    return super.get(url).map(res => res.json());
  }

  getServices() {
    const url = `${API.BASE_URL}/${API.END_POINTS.BASE}/${API.VERSION}/${API.RESOURCES.SERVICIOS}`;
    return super.get(url).map(res => res.json());
  }

  createPresupuesto(body: any) {
    const url = `${API.BASE_URL}/${API.END_POINTS.BASE}/${API.VERSION}/${API.RESOURCES.PRESUPUESTO}`;

    return super.post(url, body).map(res => res.json());
  }

  createService(body: any) {
    const url = `${API.BASE_URL}/${API.END_POINTS.BASE}/${API.VERSION}/${API.RESOURCES.SERVICIOS}`;

    return super.post(url, body).map(res => res.json());
  }
}
