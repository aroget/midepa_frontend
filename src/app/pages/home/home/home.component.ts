import { Component, OnInit } from '@angular/core';

import { IPageHeader } from '../../../shared/components';

@Component({
  selector: 'md-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageHeader: IPageHeader;

  constructor() { }

  ngOnInit() {
    this.pageHeader = {
      name: 'Salvador Zarate',
      rating: 4
    };
  }
}
