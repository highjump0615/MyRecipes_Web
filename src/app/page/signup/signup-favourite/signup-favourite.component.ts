import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cuisine} from '../../../models/cuisine';
import {User} from '../../../models/user';
import {FirebaseManager} from '../../../helpers/firebase-manager';
import {AppComponent} from '../../../app.component';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {BaseComponent} from '../../base/base.component';

@Component({
  selector: 'app-signup-favourite',
  templateUrl: './signup-favourite.component.html',
  styleUrls: ['./signup-favourite.component.scss']
})
export class SignupFavouriteComponent extends BaseComponent implements OnInit {

  favourites: Array<Cuisine> = [];
  userCurrent: User;

  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) public storage: StorageService
  ) {
    super(null, storage);

    const that = this;

    // set current user
    this.userCurrent = User.currentUser;

    // fetch cuisines
    const dbRef = FirebaseManager.ref();

    const query = dbRef.child(Cuisine.TABLE_NAME);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryFavourite = [];

        snapshot.forEach(function(child) {
          const c = new Cuisine(child);

          aryFavourite.push(c);
        });

        this.favourites = aryFavourite;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

  onButNext() {
    for (const cuisine of this.favourites) {
      if (cuisine.selected) {
        this.userCurrent.addFavouriteCuisine(cuisine);
      }
    }

    // add init mark
    this.userCurrent.addFavouriteCuisine(new Cuisine());

    // save user info to session storage
    User.currentUser = this.userCurrent;
    this.updateUser(User.currentUser);

    // go to signup allergies page
    this.router.navigate(['signup/allergy']);
  }

}
