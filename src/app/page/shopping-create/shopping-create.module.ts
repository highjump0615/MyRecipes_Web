import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCreateRoutingModule } from './shopping-create-routing.module';
import { ShoppingCreateComponent } from './shopping-create.component';

@NgModule({
  imports: [
    CommonModule,
    ShoppingCreateRoutingModule
  ],
  declarations: [ShoppingCreateComponent]
})
export class ShoppingCreateModule { }
