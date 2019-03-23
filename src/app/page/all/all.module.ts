import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllRoutingModule } from './all-routing.module';
import { AllComponent } from './all.component';
import { RecipesComponent } from './recipes/recipes.component';
import {ComponentsModule} from '../../components/components.module';
import { MenusComponent } from './menus/menus.component';

@NgModule({
  imports: [
    CommonModule,
    AllRoutingModule,
    ComponentsModule
  ],
  declarations: [
    AllComponent,
    RecipesComponent,
    MenusComponent
  ]
})
export class AllModule { }
