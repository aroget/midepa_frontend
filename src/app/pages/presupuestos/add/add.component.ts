import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { IBreadCrumb } from '../../../shared/components';
import { currentMonth } from '../../../shared/utils/';
import { MD_MONTHS } from '../../../shared/constants/months';

import { PresupuesotsService } from '../presupuestos.service';

@Component({
  selector: 'md-presupuestos-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class PresupuestosAddComponent implements OnInit {
  form: FormGroup;
  currentMonth: string;
  months = MD_MONTHS;
  breadcrumb: IBreadCrumb[];

  constructor(
    private fb: FormBuilder,
    private service: PresupuesotsService
  ) {
    this.form = this.fb.group({
      'apartments': ['', Validators.required],
      'month': ['', Validators.required],
      'budget': ['', Validators.required],
      'services': this.fb.array([
        this.createServiceControl()
      ])
    });
  }

  createServiceControl() {
    return this.fb.group({
      'service': ['', Validators.required],
      'costPerMonth': ['', Validators.required],
      'companyName': ['', Validators.required],
      'description': ['', Validators.required],
    });
  }

  addService() {
    const control = <FormArray>this.form.controls['services'];
    control.push(this.createServiceControl());
  }

  removeService(index) {
    const control = <FormArray>this.form.controls['services'];
    control.removeAt(index);
  }

  onSubmit(data) {
    const presupuesto = {
      month: data.month,
      budget: data.budget,
      apts: data.apartments
    };

    this
      .service
      .createPresupuesto(presupuesto)
      .switchMap((pres: any) => {
        const services = [];

        data.services.forEach(service => {
          const servicio = {
            presupuesto: pres.id,
            description: service.description,
            company: service.companyName,
            cost: service.costPerMonth,
            name: service.service
          };
          services.push(servicio);
        });

        return this.service.createService(services);
      })
      .subscribe(res => console.log(res));
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
