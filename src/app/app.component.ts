import {Component, Inject, NgZone, OnInit} from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {environment} from '../environments/environment';
import {FirebaseManager} from './helpers/firebase-manager';
import {User} from './models/user';
import {BaseComponent} from './page/base/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  static KEY_ONBOARD = 'onboard';

  title = 'app';

  constructor(
    public router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {
    // init firebase
    if (FirebaseManager.getInstance()) {
      console.log('firebase loaded');
    }

    //
    // set root page based on log in state
    //
    const that = this;

    const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {

      console.log('got auth state');
      console.log(user);

      // do not listen anymore
      unsubscribe();

      if (user) {
        // fetch current user
        User.readFromDatabase(user.uid, (u) => {
          User.currentUser = u;

          // if (u) {
          //   u.fetchCuisines(() => {
          //     // go to home page
          //     that.gotoHome();
          //   });
          // } else {
          //   that.goToSigninView();
          // }
        });

      } else {
        // No user is signed in.
        // that.goToSigninView();
      }
    });
  }

  // goToSigninView() {
  //   const value = this.storage.get(AppComponent.KEY_ONBOARD);
  //   if (value) {
  //     // onboard is already shown, go to sign in page directly
  //     this.router.navigate(['login']);
  //   } else {
  //     // app is opened for the first time
  //     this.router.navigate(['onboard']);
  //   }
  // }

  ngOnInit() {
    // this.goToSigninView();
  }
}
