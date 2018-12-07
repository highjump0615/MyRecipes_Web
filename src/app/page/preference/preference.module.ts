import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferenceRoutingModule } from './preference-routing.module';
import { PreferenceComponent } from './preference.component';

@NgModule({
  imports: [
    CommonModule,
    PreferenceRoutingModule
  ],
  declarations: [PreferenceComponent]
})
export class PreferenceModule { }
