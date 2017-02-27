import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InquilinosListComponent } from './list';
import { InquilinosAddComponent } from './add';

import { InquilinosService } from './inquilinos.service';
import { InquilinosRoutesModule } from './inquilinos.routing.module';

@NgModule({
  declarations: [ InquilinosListComponent, InquilinosAddComponent ],
  imports: [ CommonModule, InquilinosRoutesModule, ReactiveFormsModule ],
  providers: [ InquilinosService ],
  bootstrap: [ InquilinosListComponent ]
})
export class InquilinosModule {}
