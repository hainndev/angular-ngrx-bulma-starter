import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomeComponent } from './components';
import { routes } from './home.routing'
import { reducers } from './reducers'
import { reducer } from './reducers/book.reducer'
import { SearchBookEffects } from './effects/book.effect'

import { BookService } from './services/book.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        /**
         * StoreModule.forFeature is used for composing state
         * from feature modules. These modules can be loaded
         * eagerly or lazily and will be dynamically added to
         * the existing state.
         */
        StoreModule.forFeature('book', reducer),
        
        /**
         * Effects.forFeature is used to register effects
         * from feature modules. Effects can be loaded
         * eagerly or lazily and will be started immediately.
         *
         * All Effects will only be instantiated once regardless of
         * whether they are registered once or multiple times.
         */
        EffectsModule.forFeature([SearchBookEffects]),
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [BookService],
})
export class HomeModule { }