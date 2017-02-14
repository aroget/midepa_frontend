import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresupuestosAddComponent } from './add';
import { PresupuestosListComponent } from './list';
import { PresupuestosDetailsComponent } from './details';

const homeRoutes: Routes = [
  { path: 'presupuestos', component: PresupuestosListComponent },
  { path: 'presupuestos/add', component: PresupuestosAddComponent },
  { path: 'presupuestos/:id', component: PresupuestosDetailsComponent }
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
