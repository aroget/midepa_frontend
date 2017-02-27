import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { mobileReducer } from './config/reducers';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
// import { AdminComponent } from './pages/admin/admin.component';

// import { HomeModule } from './pages/admin/home/home.module';
import { SharedModule } from './shared/shared.module';

// import { InquilinosModule } from './pages/admin/inquilinos/inquilinos.module';
// import { PresupuestosModule } from './pages/admin/presupuestos/presupuestos.module';

import { AppRoutingModule } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.provideStore({ mobileReducer }),
  ],
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  providers: [ ],
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
