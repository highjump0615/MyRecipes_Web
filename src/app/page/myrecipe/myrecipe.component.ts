import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myrecipe',
  templateUrl: './myrecipe.component.html',
  styleUrls: ['./myrecipe.component.scss']
})
export class MyrecipeComponent implements OnInit {

  // recipes
  recipes: Array<string> = [];

  constructor(
    private router: Router
  ) {
    // init data
    for (let i = 0; i < 4; i++) {
      this.recipes.push('aa');
    }
  }

  ngOnInit() {
  }

  onButNewRecipe() {
    // go to new recipe page
    this.router.navigate(['recipe/new']);
  }
}
