import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteRoutingModule } from './favourite-routing.module';
import {FavouriteComponent} from './favourite.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FavouriteRoutingModule,
    ComponentsModule
  ],
  declarations: [
    FavouriteComponent
  ]
})
export class FavouriteModule { }
