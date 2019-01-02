import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../../models/user';
import {Cuisine} from '../../../models/cuisine';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {BaseComponent} from '../../base/base.component';
import {FirebaseManager} from 'app/helpers/firebase-manager';

@Component({
  selector: 'app-signup-dislike',
  templateUrl: './signup-dislike.component.html',
  styleUrls: ['./signup-dislike.component.scss']
})
export class SignupDislikeComponent extends BaseComponent implements OnInit {

  dislikes: Array<Cuisine> = [];
  userCurrent: User;

  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) public storage: StorageService
  ) {
    super(null, storage);

    const that = this;

    // set current user
    this.userCurrent = User.currentUser;

    // fetch dislikes
    const dbRef = FirebaseManager.ref();

    const query = dbRef.child(Cuisine.TABLE_NAME_DISLIKE);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryData = [];

        snapshot.forEach(function(child) {
          const c = new Cuisine(child);

          aryData.push(c);
        });

        this.dislikes = aryData;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

  onButNext() {
    for (const cuisine of this.dislikes) {
      if (cuisine.selected) {
        this.userCurrent.addDislike(cuisine);
      }
    }

    // add init mark
    this.userCurrent.addDislike(new Cuisine());

    // save user info to session storage
    User.currentUser = this.userCurrent;
    this.updateUser(User.currentUser);

    // go to main page
    this.router.navigate(['home']);
  }

}
