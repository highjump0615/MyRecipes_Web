import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCreateRoutingModule } from './shopping-create-routing.module';
import { ShoppingCreateComponent } from './shopping-create.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ShoppingCreateRoutingModule,
    FormsModule
  ],
  declarations: [ShoppingCreateComponent]
})
export class ShoppingCreateModule { }
