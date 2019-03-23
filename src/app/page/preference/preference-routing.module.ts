import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreferenceComponent} from './preference.component';

const routes: Routes = [
  {
    path: '',
    component: PreferenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferenceRoutingModule { }
