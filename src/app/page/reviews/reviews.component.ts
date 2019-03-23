import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Review} from '../../models/review';
import {DataStoreService} from '../../services/data-store.service';
import {FirebaseManager} from '../../helpers/firebase-manager';
import {Recipe} from '../../models/recipe';
import {User} from '../../models/user';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews: Array<Review> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.reviews = this.dataStore.reviews;
    const recipeId = this.route.snapshot.params['id'];

    // fetch reviews
    const dbRef = FirebaseManager.ref();
    const that = this;

    let nFetchCount = 0;
    let nFetchUserCount = 0;

    const query = dbRef.child(Review.TABLE_NAME)
      .child(recipeId);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryReviews = [];

        snapshot.forEach(function(child) {
          const r = new Review(child);
          nFetchCount++;

          User.readFromDatabase(r.userId, (user) => {
            nFetchUserCount++;

            r.user = user;
            aryReviews.splice(0, 0, r);

            // update page
            if (nFetchCount === nFetchUserCount) {
              that.reviews = aryReviews;
            }
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

  onButNewReview() {
    // go to write review page
    this.router.navigate([this.router.url + '/new']);
  }
}
