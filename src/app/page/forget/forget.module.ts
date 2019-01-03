import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetRoutingModule } from './forget-routing.module';
import {ForgetComponent} from './forget.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ForgetRoutingModule,
    FormsModule
  ],
  declarations: [
    ForgetComponent
  ]
})
export class ForgetModule { }
