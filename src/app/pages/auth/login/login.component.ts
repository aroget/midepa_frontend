import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth.service';
import { appStorage } from '../../../shared/utils';
import { ProfileService } from '../../../shared/services';

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
    const profile$ = this.profileService.getProfile();

    const stream$ = login$.switchMap(res => {
      return appStorage.set(appStorage.keys.SESSION, res.token).then(() => {
        return profile$;
      });
    });

    stream$
    .toPromise()
    .then(res => { return res.toPromise(); })
    .then(res => appStorage.set(appStorage.keys.PROFILE, JSON.stringify(res[0])))
    .then(() => this.router.navigate(['/']))
    .catch(err => console.log(err));
  }

  ngOnInit() { }
}
