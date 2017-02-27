import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'md-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  onSubmit(data) {
    if (!this.form.valid) { return; }

    console.log(data);
  }

  ngOnInit() { }
}
