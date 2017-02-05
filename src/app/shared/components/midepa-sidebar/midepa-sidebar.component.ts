import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TOGGLE } from '../../../config/reducers';

@Component({
  selector: 'md-sidebar',
  templateUrl: './midepa-sidebar.component.html',
  styleUrls: ['./midepa-sidebar.component.scss']
})
export class MidepaSidebarComponent implements OnInit {
  isOpen: Observable<any>;

  constructor(private store: Store<any>) {
    this.isOpen = store.select('mobileReducer');
  }

  ngOnInit() { }

  toggelMenu() {
    this.store.dispatch({ type: TOGGLE });
  }
}
