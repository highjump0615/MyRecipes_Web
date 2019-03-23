import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cuisine} from '../../../models/cuisine';
import {User} from '../../../models/user';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {FirebaseManager} from '../../../helpers/firebase-manager';
import {AppComponent} from '../../../app.component';
import {BaseComponent} from '../../base/base.component';

@Component({
  selector: 'app-signup-allergies',
  templateUrl: './signup-allergies.component.html',
  styleUrls: ['./signup-allergies.component.scss']
})
export class SignupAllergiesComponent extends BaseComponent implements OnInit {

  allergies: Array<Cuisine> = [];
  diets: Array<Cuisine> = [];
  userCurrent: User;

  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) public storage: StorageService
  ) {
    super(null, storage);

    const that = this;

    // set current user
    this.userCurrent = User.currentUser;

    //
    // fetch allergies
    //
    const dbRef = FirebaseManager.ref();

    const query = dbRef.child(Cuisine.TABLE_NAME_ALLERGY);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryAllergies = [];
        const aryDiets = [];

        snapshot.forEach(function(child) {
          aryAllergies.push(new Cuisine(child));
          aryDiets.push(new Cuisine(child));
        });

        this.allergies = aryAllergies;
        this.diets = aryDiets;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

  onButNext() {
    //
    // allergies
    //
    for (const item of this.allergies) {
      if (item.selected) {
        this.userCurrent.addAllergy(item);
      }
    }

    //
    // diets
    //
    for (const item of this.diets) {
      if (item.selected) {
        this.userCurrent.addDiet(item);
      }
    }

    // add init mark
    this.userCurrent.addAllergy(new Cuisine());

    // save user info to session storage
    User.currentUser = this.userCurrent;
    this.updateUser(User.currentUser);

    // go to signup allergies page
    this.router.navigate(['signup/dislike']);
  }

}
