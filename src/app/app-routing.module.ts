import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/components';
import { FaqComponent } from './features/faq/faq.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
