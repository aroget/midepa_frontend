import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { TOGGLE } from '../../../config/reducers';
import { IAvatar, AVATAR_SIZE } from '../midepa-avatar';

@Component({
  selector: 'md-topbar',
  templateUrl: './midepa-topbar.component.html',
  styleUrls: ['./midepa-topbar.component.scss']
})
export class MidepaTopBarComponent implements OnInit {
  avatar: IAvatar;

  constructor(private store: Store<any>) {
    this.avatar = {
      type: AVATAR_SIZE.DEFAULT,
      image: 'URL'
    };
  }

  toggelMenu() {
    this.store.dispatch({ type: TOGGLE });
  }

  ngOnInit() { }
}
