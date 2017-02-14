import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-presupuestos-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class PresupuestosDetailsComponent implements OnInit {
  servicios;

  constructor() {
    this.servicios = require('./servicios.json');
  }

  ngOnInit() { }
}
