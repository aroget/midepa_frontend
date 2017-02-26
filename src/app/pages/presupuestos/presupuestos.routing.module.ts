import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresupuestosAddComponent } from './add';
import { PresupuestosListComponent } from './list';
import { PresupuestosEditComponent } from './edit';
import { PresupuestosDetailsComponent } from './details';

const homeRoutes: Routes = [
  { path: 'presupuestos', component: PresupuestosListComponent },
  { path: 'presupuestos/add', component: PresupuestosAddComponent },
  { path: 'presupuestos/:presupuestoId', component: PresupuestosDetailsComponent },
  { path: 'presupuestos/:presupuestoId/edit', component: PresupuestosEditComponent }
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
