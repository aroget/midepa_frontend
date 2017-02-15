import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'md-inquilinos-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class InquilinosAddComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
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
      'apt': ['', Validators.required],
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
    console.log(data);
  }

  ngOnInit() { }
}
