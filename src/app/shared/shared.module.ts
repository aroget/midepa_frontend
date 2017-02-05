import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import {
  MidepaStarsComponent,
  MidepaAvatarComponent,
  MidepaTopBarComponent,
  MidepaSidebarComponent,
  MidepaDropdownComponent,
  MidepaBreadCrumbComponent,
  MidepaPageHeaderComponent,
  MidepaMobileMenuComponent
} from './components';

@NgModule({
  imports: [ RouterModule, BrowserModule ],
  declarations: [ MidepaSidebarComponent, MidepaTopBarComponent,
  MidepaAvatarComponent, MidepaPageHeaderComponent, MidepaStarsComponent,
  MidepaDropdownComponent, MidepaBreadCrumbComponent, MidepaMobileMenuComponent ],
  providers: [],
  exports: [ MidepaSidebarComponent, MidepaTopBarComponent, MidepaAvatarComponent,
  MidepaPageHeaderComponent, MidepaStarsComponent, MidepaDropdownComponent, MidepaBreadCrumbComponent, MidepaMobileMenuComponent ]
})
export class SharedModule {}
