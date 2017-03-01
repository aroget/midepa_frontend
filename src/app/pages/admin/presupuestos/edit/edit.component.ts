import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { IBreadCrumb } from '../../../../shared/components';
import { currentMonth } from '../../../../shared/utils/';
import { MD_MONTHS } from '../../../../shared/constants/months';

import { PresupuesotsService } from '../presupuestos.service';

@Component({
  selector: 'md-presupuestos-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class PresupuestosEditComponent implements OnInit {
  event;
  form: FormGroup;
  months = MD_MONTHS;
  formIsReady = false;
  currentMonth: string;
  presupuestoId: number;
  breadcrumb: IBreadCrumb[];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: PresupuesotsService
  ) {
    this.presupuestoId = +this.route.snapshot.params['presupuestoId'];
    this.fetch();
  }

  fetch() {
    this
      .service
      .getPresupuestoById(this.presupuestoId)
      .toPromise()
      .then(res => {
        this.event = res;
        this.buildForm();
        this.buildAsyncControls();
      })
      .catch(err => console.error(err));
  }

  buildForm() {
    this.form = this.fb.group({
      'apartments': [this.event.apartments, Validators.required],
      'month': [this.event.month, Validators.required],
      'budget': [this.event.budget, Validators.required],
      'condominio': [this.event.condominio.id, Validators.required],
      'servicios': this.fb.array([
        this.createNewServiceControl()
      ])
    });
    this.formIsReady = true;

  }

  buildAsyncControls() {
    this.event.servicios.forEach(servicio => this.addOldService(servicio));
  }

  createServiceControl(servicio) {
    return this.fb.group({
      'name': [servicio.name, Validators.required],
      'price': [servicio.price, Validators.required],
      'company_name': [servicio.company_name, Validators.required],
      'condominio': [servicio.condominio, Validators.required],
      'description': [servicio.description, Validators.required],
    });
  }

  createNewServiceControl() {
    return this.fb.group({
      'name': ['', Validators.required],
      'price': ['', Validators.required],
      'company_name': ['', Validators.required],
      'condominio': [3, Validators.required],
      'description': ['', Validators.required],
    });
  }

  addOldService(servicio) {
    const control = <FormArray>this.form.controls['servicios'];
    control.push(this.createServiceControl(servicio));
  }

  addService() {
    const control = <FormArray>this.form.controls['servicios'];
    control.push(this.createNewServiceControl());
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
