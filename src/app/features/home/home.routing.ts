import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { HomeComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];