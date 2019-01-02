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

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent extends BaseComponent implements OnInit {

  email = '';
  password = '';

  constructor(
    public router: Router,
    private overlay: SpinnerOverlayService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    public dialog: MatDialog
  ) {
    super(dialog);
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

      this.overlay.hide();

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
        this.router.navigate(['home']);
      }

      if (onComplete) {
        onComplete();
      }
    });
  }
}
