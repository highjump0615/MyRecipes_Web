import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule,
    ComponentsModule
  ],
  declarations: [
    SettingComponent
  ]
})
export class SettingModule { }
