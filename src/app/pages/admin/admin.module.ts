import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminComponent } from './admin.component';

import { SharedModule } from '../../shared/shared.module';
import { AdminlRoutingModule } from './admin.routing.module';

import { HomeModule } from './home/home.module';
import { InquilinosModule } from './inquilinos/inquilinos.module';
import { PresupuestosModule } from './presupuestos/presupuestos.module';

@NgModule({
  declarations: [ AdminComponent ],

  imports: [ CommonModule, AdminlRoutingModule, HomeModule, InquilinosModule, PresupuestosModule, SharedModule ],

  providers: [ ],
})
export class AdminModule { }
