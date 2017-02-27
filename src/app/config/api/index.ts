import { Headers } from '@angular/http';

const BASE_URL = 'https://midepa-backend.herokuapp.com';

const END_POINTS = {
  'BASE': 'midepa/api',
  'AUTH': 'auth'
};

const VERSION = 'v1';

const RESOURCES = {
  'PROFILE': 'me',
  'REGISTER': 'register',
  'SERVICIO': 'servicio',
  'SERVICIOS': 'servicios',
  'INQUILINOS': 'inquilinos',
  'PRESUPUESTO': 'presupuesto',
  'PRESUPUESTOS': 'presupuestos'
};

const token = 'b53ca7179410c882a836407ef4a34112e03983d3';

const HEADERS = new Headers({
  'Authorization': `token ${token}`
});

export const API = {
  HEADERS,
  VERSION,
  BASE_URL,
  RESOURCES,
  END_POINTS
};
