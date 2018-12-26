import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyrecipeRoutingModule } from './myrecipe-routing.module';
import { MyrecipeComponent } from './myrecipe.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    MyrecipeRoutingModule,
    ComponentsModule
  ],
  declarations: [MyrecipeComponent]
})
export class MyrecipeModule { }
