import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

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

}
