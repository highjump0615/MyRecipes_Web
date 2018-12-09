import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookingTipRoutingModule } from './cooking-tip-routing.module';
import {CookingTipComponent} from './cooking-tip.component';

@NgModule({
  imports: [
    CommonModule,
    CookingTipRoutingModule
  ],
  declarations: [
    CookingTipComponent
  ]
})
export class CookingTipModule { }
