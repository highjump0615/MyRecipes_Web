import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipCreateRoutingModule } from './tip-create-routing.module';
import { TipCreateComponent } from './tip-create.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TipCreateRoutingModule,
    FormsModule
  ],
  declarations: [TipCreateComponent]
})
export class TipCreateModule { }
