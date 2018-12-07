import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {RecipeGridCardComponent} from '../../components/recipe-grid-card/recipe-grid-card.component';
import {StarRateComponent} from '../../components/star-rate/star-rate.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    RecipeGridCardComponent,
    StarRateComponent
  ]
})
export class HomeModule { }
