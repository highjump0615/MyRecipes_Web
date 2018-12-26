import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from './reviews.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    ComponentsModule
  ],
  declarations: [ReviewsComponent]
})
export class ReviewsModule { }
