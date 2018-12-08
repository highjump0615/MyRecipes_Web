import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferenceRoutingModule } from './preference-routing.module';
import { PreferenceComponent } from './preference.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    PreferenceRoutingModule,
    ComponentsModule
  ],
  declarations: [
    PreferenceComponent
  ]
})
export class PreferenceModule { }
