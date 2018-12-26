import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/recipe';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(
    private router: Router
  ) {
    this.recipe = new Recipe();
  }

  ngOnInit() {
  }

  onButReview() {
    // go to reviews page
    this.router.navigate(['reviews']);
  }
}
