import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReviewsComponent} from './reviews.component';
import {ReviewCreateComponent} from './review-create/review-create.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewsComponent
  },
  {
    path: 'new',
    component: ReviewCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
