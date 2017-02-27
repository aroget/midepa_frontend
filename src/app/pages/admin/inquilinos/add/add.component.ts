import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { InquilinosService } from '../inquilinos.service';

@Component({
  selector: 'md-inquilinos-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class InquilinosAddComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: InquilinosService
  ) {
    this.form = this.fb.group({
      'inquilinos': this.fb.array([
        this.createInquilino()
      ])
    });
  }

  createInquilino() {
    return this.fb.group({
      'name': ['', Validators.required],
      'apartment_number': ['', Validators.required],
      'email': ['', Validators.required],
      'phone': ['', Validators.required],
    });
  }

  addInquilino() {
    const control = <FormArray>this.form.controls['inquilinos'];
    control.push(this.createInquilino());
  }

  removeInquilino(index) {
    const control = <FormArray>this.form.controls['inquilinos'];
    control.removeAt(index);
  }

  onSubmit(data) {
    const inquilinos = [];

    data.inquilinos.forEach(inquilino => {
      const inq = {
        'is_admin': 'False',
        'first_name': inquilino.name.split(' ')[0],
        'last_name': inquilino.name.split(' ')[0],
        'username': inquilino.email,
        'password': 'password',
        'apartment_number': inquilino.apartment_number,
        'email': inquilino.email,
        'phone': inquilino.phone,
      };
      inquilinos.push(inq);
    });

    this
      .service
      .createInqilinos(inquilinos)
      .subscribe(
        () => console.log('All Good'),
        err => console.log(err.json())
      );

  }

  ngOnInit() { }
}
