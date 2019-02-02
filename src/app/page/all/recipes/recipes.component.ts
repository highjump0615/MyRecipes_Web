import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../../models/recipe';
import {FirebaseManager} from '../../../helpers/firebase-manager';
import {BaseModel} from '../../../models/base-model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Array<Recipe> = [];

  constructor() {
    //
    // fetch recipes
    //
    const dbRef = FirebaseManager.ref();

    const that = this;

    const query = dbRef.child(Recipe.TABLE_NAME)
      .orderByChild(BaseModel.FIELD_DATE);

    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        snapshot.forEach(function(child) {
          const r = new Recipe(child);

          that.recipes.splice(0, 0, r);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
