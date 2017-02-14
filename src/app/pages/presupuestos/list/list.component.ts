import { Component, OnInit } from '@angular/core';

import { currentMonth } from '../../../shared/utils/';
import { IPageHeader } from '../../../shared/components';


@Component({
  selector: 'md-presupuestos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PresupuestosListComponent implements OnInit {
  currentMonth: string;
  services = [];
  pageHeader: IPageHeader;

  constructor() { }

  ngOnInit() {
    this.pageHeader = {
      name: 'Salvador Zarate',
      rating: 4
    };
    this.currentMonth = currentMonth;

    setTimeout(() => { this.services = require('./servicios.json'); }, 1500);
  }
}
