import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FavouriteComponent} from './favourite.component';

const routes: Routes = [
  {
    path: '',
    component: FavouriteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteRoutingModule { }
