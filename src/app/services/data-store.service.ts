import { Injectable } from '@angular/core';
import {Tip} from '../models/tip';
import {Ingredient} from '../models/ingredient';
import {Recipe} from '../models/recipe';
import {Review} from '../models/review';
import {Shopping} from '../models/shopping';

@Injectable()
export class DataStoreService {

  // signup parameters
  signupEmail: string;
  signupPassword: string;

  // cooking tips
  cookingTips: Array<Tip> = [];

  // ingredients
  ingredients: Array<Ingredient> = [];

  // all recipes
  myRecipes: Array<Recipe> = [];

  // selected object
  recipeSelected: Recipe;

  constructor() { }

}
