import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';

import { AuthGuard } from '../../../config/guards';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [ AuthGuard ] },
];
@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutesModule {}
