import { Component } from '@angular/core';

import '../style/app.scss';
require('jquery');
require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min');

@Component({
  selector: 'md-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor() {
  }
}
