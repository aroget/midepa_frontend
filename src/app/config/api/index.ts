import { Headers } from '@angular/http';
import { appStorage } from '../../shared/utils/localStorage';

// const BASE_URL = 'https://midepa-backend.herokuapp.com';
const BASE_URL = 'http://localhost:8000';

const END_POINTS = {
  'BASE': 'midepa/api',
  'AUTH': 'midepa'
};

const VERSION = 'v1';

const RESOURCES = {
  'PROFILE': 'me',
  'LOGIN': 'auth',
  'SERVICIO': 'servicio',
  'REGISTER': 'register',
  'SERVICIOS': 'servicios',
  'INQUILINOS': 'inquilinos',
  'PRESUPUESTO': 'presupuesto',
  'PRESUPUESTOS': 'presupuestos'
};


const HEADERS = new Headers({
  'Authorization': `token ${appStorage.get(appStorage.keys.SESSION)}`
});

export const API = {
  HEADERS,
  VERSION,
  BASE_URL,
  RESOURCES,
  END_POINTS
};
