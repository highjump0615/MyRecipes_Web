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

@Component({
  selector: 'app-signup-profile',
  templateUrl: './signup-profile.component.html',
  styleUrls: ['../signup-email/signup-email.component.scss']
})
export class SignupProfileComponent extends BaseComponent implements OnInit {

  firstName = '';
  lastName = '';

  @ViewChild('imageProfile') uploadPhoto: ImageUploaderComponent;

  constructor(
    private router: Router,
    private dataStore: DataStoreService,
    private overlay: SpinnerOverlayService,
    public dialog: MatDialog,
    @Inject(SESSION_STORAGE) private storage: StorageService,
  ) {
    super(dialog);
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

      this.uploadImageAndSetupUserInfo();

    }).catch((err) => {
      console.log(err);

      this.overlay.hide();

      // show error alert
      this.showErrorDialg('Signup Failed', err.message);
    });
  }

  uploadImageAndSetupUserInfo() {

    if (this.uploadPhoto.picture) {
      // show loading view
      this.overlay.show();

      // upload photo
      const user = User.currentUser;
      const path = 'users/' + user.id + '.png';

      FirebaseManager.getInstance().uploadImageTo(
        path,
        this.uploadPhoto.picture,
        (downloadURL, error) => {
          if (error) {
            // failed to upload
            this.overlay.hide();
            return;
          }

          User.currentUser.photoUrl = downloadURL;
          this.saveUserInfo();
        });
    } else {
      this.saveUserInfo();
    }
  }

  saveUserInfo() {
    const user = User.currentUser;

    // save info
    user.firstName = this.firstName;
    user.lastName = this.lastName;

    user.saveToDatabase();

    // save user info to session storage
    this.storage.set(AppComponent.KEY_USER, User.currentUser);

    // hide loading view
    this.overlay.hide();

    // go to signup favourite page
    this.router.navigate(['signup/favourite']);
  }
}
