import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CookingTipComponent} from './cooking-tip.component';

const routes: Routes = [
  {
    path: '',
    component: CookingTipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookingTipRoutingModule { }
