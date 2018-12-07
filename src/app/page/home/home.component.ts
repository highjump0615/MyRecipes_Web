import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  desc = 'Food Blogger, Explorer, Designer, Entrepreneur, Food photographer';

  menus: Array<string> = [];

  // recipes
  upcomings: Array<string> = [];
  recipes: Array<string> = [];

  constructor() {
    // init data
    for (let i = 0; i < 2; i++) {
      this.menus.push('aa');
    }

    // init data
    for (let i = 0; i < 4; i++) {
      this.upcomings.push('aa');
      this.recipes.push('aa');
    }
  }

  ngOnInit() {
  }

  onButCookingTip() {
  }
}
