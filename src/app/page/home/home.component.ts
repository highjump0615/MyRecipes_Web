import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SpinnerOverlayService} from '../../services/spinner-overlay.service';
import {User} from '../../models/user';
import {Recipe} from '../../models/recipe';
import {FirebaseManager} from '../../helpers/firebase-manager';
import {BaseModel} from '../../models/base-model';
import {Shopping} from '../../models/shopping';
import {DataStoreService} from '../../services/data-store.service';
import {BaseComponent} from '../base/base.component';
import {MatDialog} from '@angular/material';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {

  // user info
  userCurrent = User.currentUser;

  menus: Array<string> = [];

  // recipes
  upcomings: Array<Recipe> = [];
  recipes: Array<Recipe> = [];

  constructor(
    private router: Router,
    private overlay: SpinnerOverlayService,
    @Inject(SESSION_STORAGE) public storage?: StorageService
  ) {
    super(null, storage);

    // fetch menus

    // fetch shopping lists
    if (this.userCurrent.shoppingList.length <= 0) {
      this.userCurrent.fetchShoppingList().then((user) => {
        this.updateUser(user);

        console.log(User.currentUser.shoppingList);
      });
    }

    //
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
    this.router.navigate(['shopping']);
  }

  onClickShopping(data: Shopping) {
    // go to edit shopping list page
    this.router.navigate(['shopping', data.id]);
  }
}
