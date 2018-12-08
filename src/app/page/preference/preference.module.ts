import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferenceRoutingModule } from './preference-routing.module';
import { PreferenceComponent } from './preference.component';
import {ExpandMenuComponent} from '../../components/expand-menu/expand-menu.component';
import {ExpandMenuItemComponent} from '../../components/expand-menu/expand-menu-item/expand-menu-item.component';
import {CuisineItemComponent} from '../../components/cuisine-item/cuisine-item.component';

@NgModule({
  imports: [
    CommonModule,
    PreferenceRoutingModule
  ],
  declarations: [
    PreferenceComponent,
    ExpandMenuComponent,
    ExpandMenuItemComponent,
    CuisineItemComponent
  ]
})
export class PreferenceModule { }
