import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../../shared/shared.module';
import { PresupuestosRoutesModule } from './presupuestos.routing.module';

import { PresupuestosAddComponent } from './add';
import { PresupuestosListComponent } from './list';
import { PresupuestosDetailsComponent } from './details';

@NgModule({
  declarations: [ PresupuestosAddComponent, PresupuestosListComponent, PresupuestosDetailsComponent ],
  imports: [ BrowserModule, SharedModule, PresupuestosRoutesModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [  ]
})
export class PresupuestosModule {}
