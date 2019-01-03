import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {MatDialog} from '@angular/material';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {BaseProfileComponent} from '../base/base-profile.component';
import {SpinnerOverlayService} from '../../services/spinner-overlay.service';
import {Router} from '@angular/router';
import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent extends BaseProfileComponent implements OnInit {

  // user info
  userCurrent: User;

  constructor(
    private router: Router,
    public overlay: SpinnerOverlayService,
    public dialog?: MatDialog,
    @Inject(SESSION_STORAGE) public storage?: StorageService
  ) {
    super(overlay, dialog, storage);

    // set current user
    this.userCurrent = User.currentUser;

    this.firstName = this.userCurrent.firstName;
    this.lastName = this.userCurrent.lastName;
    this.desc = this.userCurrent.desc;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.uploadImageAndSetupUserInfo(this.doneCallback);
  }

  doneCallback = () => {
    // go to signup favourite page
    this.router.navigate(['home']);
  }

}
