import { Headers } from '@angular/http';

const BASE_URL = 'https://midepa-backend.herokuapp.com';

const END_POINTS = {
  'BASE': 'midepa/api',
  'AUTH': 'auth'
};

const VERSION = 'v1';

const RESOURCES = {
  'PROFILE': 'profile',
  'SERVICIOS': 'servicios',
  'INQUILINOS': 'inquilinos',
  'PRESUPUESTO': 'presupuesto'
};

const token = '4ec81925d4b9352732489e14c04bfd2cdfd38b68';

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
