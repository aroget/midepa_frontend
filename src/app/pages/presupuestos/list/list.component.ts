import { Component, OnInit } from '@angular/core';

import { MD_MONTHS } from '../../../shared/constants/months';
import { currentMonth } from '../../../shared/utils/';

@Component({
  selector: 'md-presupuestos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PresupuestosListComponent implements OnInit {
  months = MD_MONTHS;
  currentMonth: string;

  constructor() { }

  ngOnInit() {
    this.currentMonth = currentMonth;
  }
}
