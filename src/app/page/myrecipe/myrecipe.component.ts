import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myrecipe',
  templateUrl: './myrecipe.component.html',
  styleUrls: ['./myrecipe.component.scss']
})
export class MyrecipeComponent implements OnInit {

  // recipes
  recipes: Array<string> = [];

  constructor() {
    // init data
    for (let i = 0; i < 4; i++) {
      this.recipes.push('aa');
    }
  }

  ngOnInit() {
  }

  onButNewRecipe() {
  }
}
