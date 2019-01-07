import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/recipe';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // init from resolved data
    this.recipe = this.route.snapshot.data['recipeDetail'];
  }

  onButReview() {
    // go to reviews page
    this.router.navigate(['reviews']);
  }
}
