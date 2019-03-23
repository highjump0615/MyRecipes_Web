import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ImageUploaderComponent} from '../../../components/image-uploader/image-uploader.component';
import {FirebaseManager} from '../../../helpers/firebase-manager';
import {DataStoreService} from '../../../services/data-store.service';
import {User} from '../../../models/user';
import {SpinnerOverlayService} from '../../../services/spinner-overlay.service';
import {BaseComponent} from '../../base/base.component';
import {MatDialog} from '@angular/material';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {AppComponent} from '../../../app.component';
import {BaseProfileComponent} from '../../base/base-profile.component';

@Component({
  selector: 'app-signup-profile',
  templateUrl: './signup-profile.component.html',
  styleUrls: ['../signup-email/signup-email.component.scss']
})
export class SignupProfileComponent extends BaseProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private dataStore: DataStoreService,
    public overlay: SpinnerOverlayService,
    public dialog: MatDialog,
    @Inject(SESSION_STORAGE) public storage: StorageService,
  ) {
    super(overlay, dialog, storage);
  }

  ngOnInit() {
  }

  onNext() {

    const strEmail = this.dataStore.signupEmail;
    if (!strEmail) {
      // show error alert
      this.showErrorDialg('Signup Failed', 'No email address specified');
      return;
    }

    this.overlay.show();

    // do signup
    FirebaseManager.auth().createUserWithEmailAndPassword(
      strEmail,
      this.dataStore.signupPassword
    ).then((res) => {
      console.log(res);

      const u = res.user;
      if (!u) {
        return;
      }

      // set user
      const userNew = new User(u.uid);

      // save user info
      userNew.email = strEmail;

      User.currentUser = userNew;

      this.uploadImageAndSetupUserInfo(this.doneCallback);

    }).catch((err) => {
      console.log(err);

      this.overlay.hide();

      // show error alert
      this.showErrorDialg('Signup Failed', err.message);
    });
  }

  doneCallback = () => {
    // go to signup favourite page
    this.router.navigate(['signup/favourite']);
  }

}
