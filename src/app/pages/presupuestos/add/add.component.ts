import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { IBreadCrumb } from '../../../shared/components';
import { currentMonth } from '../../../shared/utils/';

@Component({
  selector: 'md-presupuestos-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class PresupuestosAddComponent implements OnInit {
  form: FormGroup;
  currentMonth: string;
  breadcrumb: IBreadCrumb[];

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      'apartments': ['', Validators.required],
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

  onSubmit(data) {
    console.log('valid', this.form.valid);
    console.log(data);
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
