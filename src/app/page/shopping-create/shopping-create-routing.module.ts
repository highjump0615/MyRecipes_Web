import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingCreateComponent} from './shopping-create.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCreateRoutingModule { }
