import {Component, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';
import {Review} from '../../../models/review';
import {ActivatedRoute} from '@angular/router';
import {DataStoreService} from '../../../services/data-store.service';
import {StarRateComponent} from '../../../components/star-rate/star-rate.component';
import {Recipe} from '../../../models/recipe';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss']
})
export class ReviewCreateComponent implements OnInit {

  title = '';
  content = '';

  @ViewChild('starRate') starRate: StarRateComponent;

  constructor(
    private route: ActivatedRoute,
    private dataStore: DataStoreService,
    private location: Location
  ) { }

  ngOnInit() {
    console.log();
  }

  onAdd() {
    const recipe = this.dataStore.recipeSelected;
    if (!recipe) {
      return;
    }

    // add new review
    const reviewNew = new Review();

    reviewNew.title = this.title;
    reviewNew.content = this.content;
    reviewNew.rate = this.starRate.rating;

    reviewNew.saveToDatabase(null, recipe.id);

    // update recipe's rate
    recipe.rateCount++;
    recipe.rate += this.starRate.rating;
    recipe.saveToDatabaseWithField(Recipe.FIELD_RATECOUNT, recipe.rateCount);
    recipe.saveToDatabaseWithField(Recipe.FIELD_RATE, recipe.rate);

    // go back to
    this.location.back();
  }
}
