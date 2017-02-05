import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import '../style/app.scss';
require('jquery');
require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min');

@Component({
  selector: 'md-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isOpen: Observable<any>;

  constructor(private store: Store<any>) {
    this.isOpen = this.store.select('mobileReducer');
  }
}
