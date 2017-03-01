import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home';
import { HomeRoutesModule } from './home.routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { InquilinosService } from '../inquilinos/inquilinos.service';
import { PresupuesotsService } from '../presupuestos/presupuestos.service';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [ CommonModule, SharedModule, HomeRoutesModule ],
  providers: [ InquilinosService, PresupuesotsService ],
})
export class HomeModule {}
