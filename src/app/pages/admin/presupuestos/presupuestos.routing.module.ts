import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresupuestosAddComponent } from './add';
import { PresupuestosListComponent } from './list';
import { PresupuestosEditComponent } from './edit';
import { PresupuestosDetailsComponent } from './details';

import { AuthGuard } from '../../../config/guards';

const homeRoutes: Routes = [
  { path: '', component: PresupuestosListComponent, canActivate: [ AuthGuard ] },
  { path: 'add', component: PresupuestosAddComponent, canActivate: [ AuthGuard ] },
  { path: ':presupuestoId', component: PresupuestosDetailsComponent, canActivate: [ AuthGuard ] },
  { path: ':presupuestoId/edit', component: PresupuestosEditComponent, canActivate: [ AuthGuard ]}
];
@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PresupuestosRoutesModule {}
