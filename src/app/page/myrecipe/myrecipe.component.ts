import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {Recipe} from '../../models/recipe';
import {FirebaseManager} from '../../helpers/firebase-manager';
import {DataStoreService} from '../../services/data-store.service';


@Component({
  selector: 'app-myrecipe',
  templateUrl: './myrecipe.component.html',
  styleUrls: ['./myrecipe.component.scss']
})
export class MyrecipeComponent implements OnInit {

  // recipes
  recipes: Array<Recipe> = [];
  userCurrent = User.currentUser;

  constructor(
    private router: Router,
    private dataStore: DataStoreService
  ) {
    this.recipes = this.dataStore.myRecipes;

    // fetch recipes
    const dbRef = FirebaseManager.ref();

    let query: any = dbRef.child(Recipe.TABLE_NAME);

    if (!this.userCurrent.isAdmin()) {
      query = query.orderByChild(Recipe.FIELD_USERID)
        .equalTo(this.userCurrent.id);
    }

    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryRecipe = [];

        snapshot.forEach(function(child) {
          const r = new Recipe(child);

          aryRecipe.push(r);

          console.log(child);
        });

        this.recipes = aryRecipe;
        this.dataStore.myRecipes = aryRecipe;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

  onButNewRecipe() {
    // go to new recipe page
    this.router.navigate(['new/recipe']);
  }
}
