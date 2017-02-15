import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { mobileReducer } from './config/reducers';

import { AppComponent } from './app.component';

import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';

import { InquilinosModule } from './pages/inquilinos/inquilinos.module';
import { PresupuestosModule } from './pages/presupuestos/presupuestos.module';

import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    HomeModule,
    BrowserModule,
    HttpModule,
    SharedModule,
    FormsModule,
    InquilinosModule,
    PresupuestosModule,
    routing,
    StoreModule.provideStore({ mobileReducer }),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
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
