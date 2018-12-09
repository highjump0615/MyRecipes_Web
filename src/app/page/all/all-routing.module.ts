import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllComponent} from './all.component';
import {RecipesComponent} from './recipes/recipes.component';
import {MenusComponent} from './menus/menus.component';

const routes: Routes = [
  {
    path: '',
    component: AllComponent,
    children: [
      {
        path: '',
        redirectTo: 'recipes'
      },
      {
        path: 'recipes',
        component: RecipesComponent
      },
      {
        path: 'menus',
        component: MenusComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllRoutingModule { }
