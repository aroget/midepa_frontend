import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { appStorage } from '../../../../shared/utils';
import { PresupuesotsService } from '../presupuestos.service';

@Component({
  selector: 'md-presupuestos-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class PresupuestosDetailsComponent implements OnInit {
  user;
  presupuesto;
  isReady = false;
  presupuestoId: number;

  constructor(
    private route: ActivatedRoute,
    private service: PresupuesotsService
  ) {
    this.user = appStorage.get(appStorage.keys.PROFILE);
    this.presupuestoId = this.route.snapshot.params['presupuestoId'];

    this
      .service
      .getPresupuestoById(this.presupuestoId)
      .subscribe(
        res => {
          this.isReady = true;
          this.presupuesto = res;
        },
        err => console.error(err.json)
      );
  }

  ngOnInit() { }
}
