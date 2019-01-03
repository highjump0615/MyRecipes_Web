import {Component, Inject, OnInit} from '@angular/core';
import {Cuisine} from '../../models/cuisine';
import {FirebaseManager} from '../../helpers/firebase-manager';
import {User} from '../../models/user';
import {BaseComponent} from '../base/base.component';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent extends BaseComponent implements OnInit {

  // recipes
  favourites: Array<Cuisine> = [];
  allergies: Array<Cuisine> = [];
  diets: Array<Cuisine> = [];
  dislikes: Array<Cuisine> = [];

  // index for cuisine items
  CUISINE_FAVOURITE = 0;
  CUISINE_ALLERGY = 1;
  CUISINE_DIET = 2;
  CUISINE_DISLIKE = 3;

  constructor(
    @Inject(SESSION_STORAGE) public storage?: StorageService
  ) {
    super(null, storage);

    const that = this;

    //
    // fetch cuisines
    //
    const dbRef = FirebaseManager.ref();
    const userCurrent = User.currentUser;

    //
    // fetch favourites
    //
    let query = dbRef.child(Cuisine.TABLE_NAME);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryFavourite = [];

        snapshot.forEach(function(child) {
          const c = new Cuisine(child);
          for (const cId of userCurrent.favouriteCuisines) {
            if (c.id === cId) {
              c.selected = true;
            }
          }

          aryFavourite.push(c);
        });

        this.favourites = aryFavourite;
      })
      .catch((err) => {
        console.log(err);
      });

    //
    // fetch allergies & diets
    //
    query = dbRef.child(Cuisine.TABLE_NAME_ALLERGY);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryAllergy = [];
        const aryDiet = [];

        snapshot.forEach(function(child) {
          const allergy = new Cuisine(child);
          for (const cId of userCurrent.allergies) {
            if (allergy.id === cId) {
              allergy.selected = true;
            }
          }
          aryAllergy.push(allergy);

          const diet = new Cuisine(child);
          for (const cId of userCurrent.diets) {
            if (diet.id === cId) {
              diet.selected = true;
            }
          }
          aryDiet.push(diet);
        });

        this.allergies = aryAllergy;
        this.diets = aryDiet;
      })
      .catch((err) => {
        console.log(err);
      });

    //
    // fetch dislikes
    //
    query = dbRef.child(Cuisine.TABLE_NAME_DISLIKE);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryDislike = [];

        snapshot.forEach(function(child) {
          const c = new Cuisine(child);
          for (const cId of userCurrent.favouriteCuisines) {
            if (c.id === cId) {
              c.selected = true;
            }
          }

          aryDislike.push(c);
        });

        this.dislikes = aryDislike;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

  onSelectItem(param) {
    console.log(param);

    const userCurrent = User.currentUser;

    switch (param.index) {
      case this.CUISINE_FAVOURITE:
        userCurrent.addFavouriteCuisine(param.cuisine);
        break;

      case this.CUISINE_ALLERGY:
        userCurrent.addAllergy(param.cuisine);
        break;

      case this.CUISINE_DIET:
        userCurrent.addDiet(param.cuisine);
        break;

      case this.CUISINE_DISLIKE:
        userCurrent.addDislike(param.cuisine);
        break;
    }

    this.updateUser(userCurrent);
  }

}
