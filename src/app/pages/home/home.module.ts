import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home';
import { HomeRoutesModule } from './home.routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [ BrowserModule, SharedModule, HomeRoutesModule ],
  providers: [],
  bootstrap: [  ]
})
export class HomeModule {}
