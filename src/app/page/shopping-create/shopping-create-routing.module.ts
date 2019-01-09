import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingCreateComponent} from './shopping-create.component';
import {ReviewsComponent} from '../reviews/reviews.component';
import {RecipeDetailResolver} from '../recipe-detail/recipe-detail.resolver';
import {ShoppingCreateResolver} from './shopping-create.resolver';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCreateComponent
  },
  {
    path: ':id',
    component: ShoppingCreateComponent,
    resolve: {
      shopping: ShoppingCreateResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCreateRoutingModule { }
