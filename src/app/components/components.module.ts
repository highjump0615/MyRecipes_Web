import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckBoxComponent} from './check-box/check-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CheckBoxComponent
  ],
  exports: [
    CheckBoxComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
