import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from './reviews.component';
import {ComponentsModule} from '../../components/components.module';
import { ReviewCreateComponent } from './review-create/review-create.component';

@NgModule({
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    ComponentsModule
  ],
  declarations: [ReviewsComponent, ReviewCreateComponent]
})
export class ReviewsModule { }
