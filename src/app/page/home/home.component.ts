import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SpinnerOverlayService} from '../../services/spinner-overlay.service';
import {User} from '../../models/user';
import {Recipe} from '../../models/recipe';
import {FirebaseManager} from '../../helpers/firebase-manager';
import {BaseModel} from '../../models/base-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // user info
  userCurrent = User.currentUser;

  menus: Array<string> = [];

  // recipes
  upcomings: Array<Recipe> = [];
  recipes: Array<Recipe> = [];

  constructor(
    private router: Router,
    private overlay: SpinnerOverlayService,
  ) {
    // fetch recipes
    const dbRef = FirebaseManager.ref();

    const that = this;

    const query = dbRef.child(Recipe.TABLE_NAME)
      .orderByChild(BaseModel.FIELD_DATE)
      .limitToLast(8);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryRecipe = [];

        snapshot.forEach(function(child) {
          const r = new Recipe(child);

          that.recipes.splice(0, 0, r);

          // upcomings are 4 recipes at most
          if (that.upcomings.length < 4) {
            that.upcomings.splice(0, 0, r);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
