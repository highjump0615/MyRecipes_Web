import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule
  ],
  declarations: [SettingComponent]
})
export class SettingModule { }
