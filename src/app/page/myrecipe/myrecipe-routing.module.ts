import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyrecipeComponent} from './myrecipe.component';

const routes: Routes = [
  {
    path: '',
    component: MyrecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyrecipeRoutingModule { }
