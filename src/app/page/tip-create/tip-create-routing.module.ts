import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TipCreateComponent} from './tip-create.component';

const routes: Routes = [
  {
    path: '',
    component: TipCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipCreateRoutingModule { }
