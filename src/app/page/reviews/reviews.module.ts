import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsComponent } from './reviews.component';
import {ComponentsModule} from '../../components/components.module';
import { ReviewCreateComponent } from './review-create/review-create.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [ReviewsComponent, ReviewCreateComponent]
})
export class ReviewsModule { }
