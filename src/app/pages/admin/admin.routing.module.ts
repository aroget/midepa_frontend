import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
// import { ProfileGuard } from '../../config/guards';

const appRoutes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', loadChildren: './home/home.module#HomeModule' },

      { path: 'inquilinos', loadChildren: './inquilinos/inquilinos.module#InquilinosModule' },

      { path: 'presupuestos', loadChildren: './presupuestos/presupuestos.module#PresupuestosModule' },
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminlRoutingModule {}
