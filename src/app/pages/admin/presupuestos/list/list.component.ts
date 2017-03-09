import { Component, OnInit } from '@angular/core';

import { appStorage } from '../../../../shared/utils';
import { currentMonth } from '../../../../shared/utils/';
import { IPageHeader } from '../../../../shared/components';
import { PresupuesotsService } from '../presupuestos.service';


@Component({
  selector: 'md-presupuestos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PresupuestosListComponent implements OnInit {
  user;
  services = [];
  currentMonth: string;
  pageHeader: IPageHeader;

  constructor(
    private service: PresupuesotsService
  ) {
    this.user = appStorage.get(appStorage.keys.PROFILE);
    this.service.getPresupuestos().subscribe(res => { this.services = res; });
  }

  ngOnInit() {
    this.pageHeader = {
      name: 'Salvador Zarate',
      rating: 4
    };
    this.currentMonth = currentMonth;
  }
}
