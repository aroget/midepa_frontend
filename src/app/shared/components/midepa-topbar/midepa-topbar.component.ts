import { Component, OnInit } from '@angular/core';

import { IAvatar, AVATAR_SIZE } from '../midepa-avatar';

@Component({
  selector: 'md-topbar',
  templateUrl: './midepa-topbar.component.html',
  styleUrls: ['./midepa-topbar.component.scss']
})
export class MidepaTopBarComponent implements OnInit {
  avatar: IAvatar;

  constructor() {
    this.avatar = {
      type: AVATAR_SIZE.DEFAULT,
      image: 'URL'
    };
  }

  ngOnInit() { }
}
