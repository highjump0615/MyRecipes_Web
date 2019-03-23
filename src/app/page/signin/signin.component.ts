import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SpinnerOverlayService} from '../../services/spinner-overlay.service';
import {FirebaseManager} from '../../helpers/firebase-manager';
import {User} from '../../models/user';
import {BaseComponent} from '../base/base.component';
import {AppComponent} from '../../app.component';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {MatDialog} from '@angular/material';
import {ErrorDialogComponent} from '../../dialogs/error-dialog/error-dialog.component';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent extends BaseComponent implements OnInit {

  email = '';
  password = '';

  SIGNIN_EMAIL = 0;
  SIGNIN_FACEBOOK = 1;
  SIGNIN_GOOGLE = 2;

  signinMethod = this.SIGNIN_EMAIL;

  constructor(
    public router: Router,
    private overlay: SpinnerOverlayService,
    @Inject(SESSION_STORAGE) public storage: StorageService,
    public dialog: MatDialog
  ) {
    super(dialog, storage);
  }

  ngOnInit() {
  }

  onButForget() {
    // go to forget password page
    this.router.navigate(['forget']);
  }

  onSignin() {
    const that = this;

    this.overlay.show();

    // do login
    FirebaseManager.auth().signInWithEmailAndPassword(
      this.email,
      this.password
    ).then( (res) => {
      console.log(res);

      if (!res.user) {
        this.overlay.hide();
        return;
      }

      this.fetchUserInfo(
        res.user,
        null,
        null,
        null,
        () => {
          that.overlay.hide();
          FirebaseManager.getInstance().signOut();
        });

    }).catch((err) => {
      console.log(err);

      this.overlay.hide();

      // show error alert
      this.showErrorDialg('Login Failed', err.message);
    });
  }

  fetchUserInfo(userInfo: firebase.User,
                firstName: string,
                lastName: string,
                photoURL: string,
                onFailed?: () => void,
                onComplete?: () => void) {

    const userId = FirebaseManager.auth().currentUser.uid;
    if (!userId) {
      if (onFailed) {
        onFailed();
      }
    }

    User.readFromDatabase(userId, (u) => {
      User.currentUser = u;

      if (!User.currentUser) {
        // get user info, from facebook account info
        if (userInfo) {
          const newUser = new User(userId);

          newUser.email = userInfo.email;
          newUser.firstName = firstName;
          newUser.lastName = lastName;
          newUser.photoUrl = photoURL;

          User.currentUser = newUser;
        }

        // social login, go to signup profile page
        this.router.navigate(['signup/profile']);
      } else {
        // save user info to session storage
        this.updateUser(User.currentUser);

        this.router.navigate(['home']);
      }

      this.overlay.hide();

      if (onComplete) {
        onComplete();
      }
    });
  }

  onButFacebook() {
    this.signinMethod = this.SIGNIN_FACEBOOK;
    const that = this;

    this.overlay.show();

    // browser
    const provider = new firebase.auth.FacebookAuthProvider();

    FirebaseManager.auth().signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const profile = result.additionalUserInfo.profile;

        console.log(profile);

        that.continueSocialSignIn(
          result.credential,
          profile['first_name'],
          profile['last_name'],
          profile['picture']['data']['url']);
      }).catch(function(error) {
      that.onError(error);
    });
  }

  onButGoogle() {
    this.signinMethod = this.SIGNIN_GOOGLE;
    const that = this;

    this.overlay.show();

    // browser
    const provider = new firebase.auth.GoogleAuthProvider();

    FirebaseManager.auth().signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const profile = result.additionalUserInfo.profile;

        console.log(profile);

        that.continueSocialSignIn(
          result.credential,
          profile['given_name'],
          profile['family_name'],
          profile['picture']);
      })
      .catch(function(error) {
        that.onError(error);
      });
  }

  continueSocialSignIn(credential, firstName, lastName, photoUrl) {
    const that = this;

    FirebaseManager.auth().signInAndRetrieveDataWithCredential(credential)
      .then((res) => {
        this.fetchUserInfo(
          res.user,
          firstName,
          lastName,
          photoUrl,
          () => {
            this.overlay.hide();
            FirebaseManager.getInstance().signOut();
          });
      })
      .catch((err) => {
        this.onError(err);
      });
  }

  onError(err) {
    console.log(err);

    this.overlay.hide();

    let strTitle = 'Google Login Failed';
    if (this.signinMethod === this.SIGNIN_FACEBOOK) {
      strTitle = 'Facebook Login Failed';
    }

    // show error alert
    this.showErrorDialg(strTitle, err.message);
  }
}
