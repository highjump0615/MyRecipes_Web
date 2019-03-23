import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuCreateRoutingModule } from './menu-create-routing.module';
import { MenuCreateComponent } from './menu-create.component';
import { AutoComponent } from './auto/auto.component';
import { ManualComponent } from './manual/manual.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    MenuCreateRoutingModule,
    ComponentsModule
  ],
  declarations: [MenuCreateComponent, AutoComponent, ManualComponent]
})
export class MenuCreateModule { }
