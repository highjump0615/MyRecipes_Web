import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SpinnerOverlayService} from '../../services/spinner-overlay.service';

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

  constructor(
    private router: Router,
    private overlay: SpinnerOverlayService,
  ) {
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
    // go to cooking tip page
    this.router.navigate(['cooking-tip']);
  }

  onButFavourite() {
    // go to favourite page
    this.router.navigate(['favorite']);
  }

  onButMyRecipe() {
    // go to my recipes page
    this.router.navigate(['myrecipes']);
  }

  onButAddMenu() {
    // go to add menu page
    this.router.navigate(['menu/new']);
  }

  onButAddShoppingList() {
    // go to add shopping list page
    this.router.navigate(['shopping/new']);
  }
}
