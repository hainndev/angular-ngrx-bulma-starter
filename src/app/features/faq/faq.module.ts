import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FaqComponent } from './components';
import { routes } from './faq.routing'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [FaqComponent],
    providers: [],
})
export class FaqModule { }