import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InquilinosListComponent } from './list';
import { InquilinosAddComponent } from './add';

const inquilinosRoutes: Routes = [
  { path: '', component: InquilinosListComponent },
  { path: 'add', component: InquilinosAddComponent },
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
