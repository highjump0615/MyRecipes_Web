import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExpandMenuComponent} from './expand-menu/expand-menu.component';
import {ExpandMenuItemComponent} from './expand-menu/expand-menu-item/expand-menu-item.component';
import {CuisineItemComponent} from './cuisine-item/cuisine-item.component';

const COMPONENTS = [
  ExpandMenuComponent,
  ExpandMenuItemComponent,
  CuisineItemComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
