import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookingTipRoutingModule } from './cooking-tip-routing.module';
import {CookingTipComponent} from './cooking-tip.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    CookingTipRoutingModule,
    ComponentsModule
  ],
  declarations: [
    CookingTipComponent
  ]
})
export class CookingTipModule { }
