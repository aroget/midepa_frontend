import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';
import { PresupuestosRoutesModule } from './presupuestos.routing.module';

import { PresupuesotsService } from './presupuestos.service';

import { PresupuestosAddComponent } from './add';
import { PresupuestosListComponent } from './list';
import { PresupuestosEditComponent } from './edit';
import { PresupuestosDetailsComponent } from './details';

@NgModule({
  declarations: [ PresupuestosAddComponent, PresupuestosListComponent, PresupuestosDetailsComponent,
  PresupuestosEditComponent ],
  imports: [ CommonModule, SharedModule, PresupuestosRoutesModule, ReactiveFormsModule ],
  providers: [ PresupuesotsService ],
})
export class PresupuestosModule {}
