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
} from './components';

@NgModule({
  imports: [ RouterModule, BrowserModule ],
  declarations: [ MidepaSidebarComponent, MidepaTopBarComponent,
  MidepaAvatarComponent, MidepaPageHeaderComponent, MidepaStarsComponent,
  MidepaDropdownComponent, MidepaBreadCrumbComponent ],
  providers: [],
  exports: [ MidepaSidebarComponent, MidepaTopBarComponent, MidepaAvatarComponent,
  MidepaPageHeaderComponent, MidepaStarsComponent, MidepaDropdownComponent, MidepaBreadCrumbComponent ]
})
export class SharedModule {}
