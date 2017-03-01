import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { mobileReducer } from './config/reducers';


import { AuthGuard, ProfileGuard } from './config/guards';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AuthModule } from './pages/auth/auth.module';
import { SharedModule } from './shared/shared.module';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    HttpModule,
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.provideStore({ mobileReducer }),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [ AuthGuard, ProfileGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
