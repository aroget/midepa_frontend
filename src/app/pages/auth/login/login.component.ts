import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { appStorage } from '../../../shared/utils';
import { ProfileService } from '../../../shared/services/profile.service';


@Component({
  selector: 'md-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  profile;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: AuthService,
    private profileService: ProfileService
  ) {
    this.form = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  onSubmit(data) {
    if (!this.form.valid) { return; }

    const login$ = this.service.login(data);

    const stream$ = login$
                    .switchMap(res => {
                      appStorage.set(appStorage.keys.SESSION, res.token);
                      return this.profileService.getProfile();
                    });

    stream$
      .subscribe(
        res => {
          appStorage.set(appStorage.keys.PROFILE, JSON.stringify(res));
          if (res.is_admin) {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/presupuestos']);
          }
        },
        err => console.error(err)
      );
  }

  ngOnInit() { }
}
