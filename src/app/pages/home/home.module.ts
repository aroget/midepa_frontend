import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home';
import { HomeRoutesModule } from './home.routing.module';
import { SharedModule } from '../../shared/shared.module';

import { InquilinosService } from '../inquilinos/inquilinos.service';
import { PresupuesotsService } from '../presupuestos/presupuestos.service';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [ BrowserModule, SharedModule, HomeRoutesModule ],
  providers: [ InquilinosService, PresupuesotsService ],
  bootstrap: [  ]
})
export class HomeModule {}
