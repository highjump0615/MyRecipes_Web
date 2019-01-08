import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {MatDialog} from '@angular/material';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {BaseProfileComponent} from '../base/base-profile.component';
import {SpinnerOverlayService} from '../../services/spinner-overlay.service';
import {Router} from '@angular/router';
import {BaseComponent} from '../base/base.component';
import {FirebaseManager} from '../../helpers/firebase-manager';
import * as firebase from 'firebase';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent extends BaseProfileComponent implements OnInit {

  // user info
  userCurrent = User.currentUser;

  oPassword = '';
  password = '';
  cPassword = '';

  constructor(
    private router: Router,
    private location: Location,
    public overlay: SpinnerOverlayService,
    public dialog?: MatDialog,
    @Inject(SESSION_STORAGE) public storage?: StorageService
  ) {
    super(overlay, dialog, storage);

    this.firstName = this.userCurrent.firstName;
    this.lastName = this.userCurrent.lastName;
    this.desc = this.userCurrent.desc;
  }

  ngOnInit() {
  }

  onSubmit() {
    // check password validate
    if (this.password) {
      // check whether old password is empty
      if (!this.oPassword) {
        this.showErrorDialg(
          'Change Password Failed',
          'Old password should not be empty'
        );

        return;
      }

      // check confirm password
      if (this.password !== this.cPassword) {
        this.showErrorDialg(
          'Change Password Failed',
          'Confirm password does not match'
        );

        return;
      }
    }

    if (this.userCurrent.isAdmin()) {
      this.updatePassword(this.doneCallback);
    } else {
      this.uploadImageAndSetupUserInfo(this.updatePassword);
    }
  }

  doneCallback = () => {
    // go back to prev page
    this.location.back();
  }

  updatePassword = (completion: () => void) => {
    // no password input
    if (!this.password) {
      completion();
      return;
    }

    // show loading view
    this.overlay.show();

    // check old password
    const credentials = firebase.auth.EmailAuthProvider.credential(
      this.userCurrent.email,
      this.oPassword
    );

    const fbUser = FirebaseManager.auth().currentUser;
    fbUser.reauthenticateAndRetrieveDataWithCredential(credentials)
      .then((data) => {
        fbUser.updatePassword(this.password).then(() => {
            this.overlay.hide();
            completion();
          })
          .catch((err) => {
            this.onError(err);
          });
      })
      .catch((err) => {
        this.onError(err);
      });
  }

  onError(error) {
    console.log(error);

    this.overlay.hide();

    let msg = error.message;
    if (error.code === 'auth/wrong-password') {
      msg = 'Old password does not correct';
    }

    this.showErrorDialg(
      'Change Password Failed',
      msg
    );
  }
}
