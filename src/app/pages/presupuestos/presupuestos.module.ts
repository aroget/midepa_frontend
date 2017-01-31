import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../../shared/shared.module';
import { PresupuestosRoutesModule } from './presupuestos.routing.module';

import { PresupuestosAddComponent } from './add';
import { PresupuestosListComponent } from './list';

@NgModule({
  declarations: [ PresupuestosAddComponent, PresupuestosListComponent ],
  imports: [ BrowserModule, SharedModule, PresupuestosRoutesModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [  ]
})
export class PresupuestosModule {}
