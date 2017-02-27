import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
// import { AdminModule } from './pages/admin/admin.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', loadChildren: './pages/admin/admin.module#AdminModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

