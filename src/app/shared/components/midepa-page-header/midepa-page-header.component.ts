import { Component, OnInit, Input } from '@angular/core';

import { appStorage } from '../../../shared/utils';

export interface IPageHeader {
  name: string;
  rating: number;
}

@Component({
  selector: 'md-page-header',
  templateUrl: './midepa-page-header.component.html',
  styleUrls: ['./midepa-page-header.component.scss']
})
export class MidepaPageHeaderComponent implements OnInit {
  @Input() data: IPageHeader;
  user;

  constructor() {
    this.user = JSON.parse(appStorage.get(appStorage.keys.PROFILE));
  }

  ngOnInit() {}
}
