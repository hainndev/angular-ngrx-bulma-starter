import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './features/home/home.module';

import { reducers, metaReducers } from './features/home/reducers';
import { initialState } from './features/home/reducers/book.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { initialState: initialState, metaReducers }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot([]),
    HomeModule,
  ],
  exports: [StoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
