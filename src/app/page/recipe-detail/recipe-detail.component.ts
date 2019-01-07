import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/recipe';
import {ActivatedRoute, Router} from '@angular/router';
import {DataStoreService} from '../../services/data-store.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataStore: DataStoreService
  ) {
  }

  ngOnInit() {
    // init from resolved data
    this.recipe = this.route.snapshot.data['recipeDetail'];
  }

  onButReview() {
    this.dataStore.recipeSelected = this.recipe;

    // go to reviews page
    this.router.navigate(['reviews', this.recipe.id]);
  }
}
