import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetRoutingModule } from './forget-routing.module';
import {ForgetComponent} from './forget.component';

@NgModule({
  imports: [
    CommonModule,
    ForgetRoutingModule
  ],
  declarations: [
    ForgetComponent
  ]
})
export class ForgetModule { }
