import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  MidepaStarsComponent,
  MidepaAvatarComponent,
  MidepaTopBarComponent,
  MidepaSidebarComponent,
  MidepaDropdownComponent,
  MidepaBreadCrumbComponent,
  MidepaPageHeaderComponent,
} from './components';

import { ProfileService } from './services';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ MidepaSidebarComponent, MidepaTopBarComponent,
  MidepaAvatarComponent, MidepaPageHeaderComponent, MidepaStarsComponent,
  MidepaDropdownComponent, MidepaBreadCrumbComponent ],

  providers: [ ProfileService ],

  exports: [ MidepaSidebarComponent, MidepaTopBarComponent, MidepaAvatarComponent,
  MidepaPageHeaderComponent, MidepaStarsComponent, MidepaDropdownComponent, MidepaBreadCrumbComponent ]
})
export class SharedModule {}
