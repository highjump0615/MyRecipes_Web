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

  constructor(
    private router: Router,
    private dataStore: DataStoreService
  ) {
    const userCurrent = User.currentUser;

    this.recipes = this.dataStore.myRecipes;

    // fetch cuisines
    const dbRef = FirebaseManager.ref();

    const query = dbRef.child(Recipe.TABLE_NAME);
    if (!userCurrent.isAdmin()) {
      query.orderByChild(Recipe.FIELD_USER)
        .equalTo(userCurrent.id);
    }

    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryRecipe = [];

        snapshot.forEach(function(child) {
          const r = new Recipe(child);

          aryRecipe.push(r);
        });

        this.recipes = aryRecipe;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

  onButNewRecipe() {
    // go to new recipe page
    this.router.navigate(['recipe/new']);
  }
}
