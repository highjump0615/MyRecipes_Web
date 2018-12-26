import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeDetailRoutingModule } from './recipe-detail-routing.module';
import { RecipeDetailComponent } from './recipe-detail.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RecipeDetailRoutingModule,
    ComponentsModule
  ],
  declarations: [RecipeDetailComponent]
})
export class RecipeDetailModule { }
