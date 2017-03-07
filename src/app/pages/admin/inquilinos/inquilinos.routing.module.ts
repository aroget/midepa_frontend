import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InquilinosListComponent } from './list';
import { InquilinosAddComponent } from './add';

import { AuthGuard } from '../../../config/guards';

const inquilinosRoutes: Routes = [
  { path: '', component: InquilinosListComponent, canActivate: [ AuthGuard ] },
  { path: 'add', component: InquilinosAddComponent, canActivate: [ AuthGuard ] },
];
@NgModule({
  imports: [
    RouterModule.forChild(inquilinosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InquilinosRoutesModule {}
