import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onButNewReview() {
    // go to write review page
    this.router.navigate(['reviews/new']);
  }
}
