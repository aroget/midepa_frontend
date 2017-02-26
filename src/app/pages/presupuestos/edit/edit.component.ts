import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { IBreadCrumb } from '../../../shared/components';
import { currentMonth } from '../../../shared/utils/';
import { MD_MONTHS } from '../../../shared/constants/months';

import { PresupuesotsService } from '../presupuestos.service';

@Component({
  selector: 'md-presupuestos-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class PresupuestosEditComponent implements OnInit {
  form: FormGroup;
  currentMonth: string;
  months = MD_MONTHS;
  breadcrumb: IBreadCrumb[];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: PresupuesotsService
  ) {
    this.form = this.fb.group({
      'apartments': ['', Validators.required],
      'month': ['', Validators.required],
      'budget': ['', Validators.required],
      'condominio': [3, Validators.required],
      'servicios': this.fb.array([
        this.createServiceControl()
      ])
    });
  }

  createServiceControl() {
    return this.fb.group({
      'name': ['', Validators.required],
      'price': ['', Validators.required],
      'company_name': ['', Validators.required],
      'condominio': [3, Validators.required],
      'description': ['', Validators.required],
    });
  }

  addService() {
    const control = <FormArray>this.form.controls['servicios'];
    control.push(this.createServiceControl());
  }

  removeService(index) {
    const control = <FormArray>this.form.controls['servicios'];
    control.removeAt(index);
  }

  onSubmit(data) {
    const presupuesto = {
      month: data.month,
      budget: data.budget,
      apartments: data.apartments,
      condominio: data.condominio
    };

    this
      .service
      .createPresupuesto(presupuesto)
      .switchMap((pres: any) => {
        const servicios = [];

        data.servicios.forEach(service => {
          const servicio = {
            presupuesto: pres.id,
            condominio: service.condominio,
            description: service.description,
            company_name: service.company_name,
            price: service.price,
            name: service.name
          };
          servicios.push(servicio);
        });

        return this.service.createService(servicios);
      })
      .subscribe(
        () => this.router.navigate(['/presupuestos']),
        err => console.error(err.json())
      );
  }

  ngOnInit() {
    this.currentMonth = currentMonth;

    this.breadcrumb = [
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'Presupuestos',
        url: '../'
      },
      {
        name: this.currentMonth,
        url: '../'
      }
    ];
  }
}
