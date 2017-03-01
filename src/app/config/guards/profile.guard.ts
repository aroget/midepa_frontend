/**
 * Guard to check if user is authenticated
 */
import { CanActivate  } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ProfileService } from '../../shared/services';
import { appStorage } from '../../shared/utils';

@Injectable()
export class ProfileGuard implements CanActivate {
  constructor(
    private router: Router,
    private profile: ProfileService
  ) {}

  getProfile() {
    return this
      .profile
      .getProfile()
      .toPromise()
      .then(res => {
        appStorage.set(appStorage.keys.PROFILE, res[0]);
        // this.router.navigate([toRoute.url]);
        return true;
      })
      .catch(() => {
        this.router.navigate(['/login']);
        appStorage.clear();
      });
  }

  canActivate() {
    return this.getProfile();
  }
}
