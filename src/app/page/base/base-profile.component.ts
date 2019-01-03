import {BaseComponent} from './base.component';
import {MatDialog} from '@angular/material';
import {Component, Inject, ViewChild} from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {User} from '../../models/user';
import {FirebaseManager} from '../../helpers/firebase-manager';
import {ImageUploaderComponent} from '../../components/image-uploader/image-uploader.component';
import {SpinnerOverlayService} from '../../services/spinner-overlay.service';

@Component({
  selector: 'app-base-profile',
  template: ''
})
export class BaseProfileComponent extends BaseComponent {

  firstName = '';
  lastName = '';
  desc = '';

  @ViewChild('imageProfile') uploadPhoto: ImageUploaderComponent;

  constructor(
    public overlay: SpinnerOverlayService,
    public dialog?: MatDialog,
    @Inject(SESSION_STORAGE) public storage?: StorageService
  ) {
    super(dialog, storage);
  }

  uploadImageAndSetupUserInfo(completion: () => void) {

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
          this.saveUserInfo(completion);
        });
    } else {
      this.saveUserInfo(completion);
    }
  }

  saveUserInfo(completion: () => void) {
    const user = User.currentUser;

    // save info
    user.firstName = this.firstName;
    user.lastName = this.lastName;
    user.desc = this.desc;

    user.saveToDatabase();

    // save user info to session storage
    User.currentUser = user;
    this.updateUser(User.currentUser);

    // hide loading view
    this.overlay.hide();

    completion();
  }

}
