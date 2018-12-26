import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeCreateRoutingModule } from './recipe-create-routing.module';
import { RecipeCreateComponent } from './recipe-create.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RecipeCreateRoutingModule,
    ComponentsModule
  ],
  declarations: [RecipeCreateComponent]
})
export class RecipeCreateModule { }
