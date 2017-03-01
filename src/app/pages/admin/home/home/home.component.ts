import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IPageHeader } from '../../../../shared/components';
import { InquilinosService } from '../../inquilinos/inquilinos.service';
import { PresupuesotsService } from '../../presupuestos/presupuestos.service';

@Component({
  selector: 'md-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isReady = false;
  inquilinos;
  presupuestos;
  pageHeader: IPageHeader;

  constructor(
    private inquilinosService: InquilinosService,
    private presupuestosService: PresupuesotsService
  ) {
    const inquilinos$ = this.inquilinosService.getInquilinos();
    const presupuestos$ = this.presupuestosService.getPresupuestos();

    const stream$ = Observable.combineLatest(inquilinos$, presupuestos$);

    stream$.subscribe(
      res => {
        this.inquilinos = res[0];
        this.presupuestos = res[1];
        this.isReady = true;
      },
      err => console.error(err.json())
    );
  }

  ngOnInit() {
    this.pageHeader = {
      name: 'Salvador Zarate',
      rating: 4
    };
  }
}
