import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipCreateRoutingModule } from './tip-create-routing.module';
import { TipCreateComponent } from './tip-create.component';

@NgModule({
  imports: [
    CommonModule,
    TipCreateRoutingModule
  ],
  declarations: [TipCreateComponent]
})
export class TipCreateModule { }
