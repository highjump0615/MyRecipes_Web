import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {MatDialog} from '@angular/material';
import {ErrorDialogComponent} from '../../dialogs/error-dialog/error-dialog.component';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {AppComponent} from '../../app.component';



@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(
    public dialog?: MatDialog,
    @Inject(SESSION_STORAGE) public storage?: StorageService
  ) { }

  ngOnInit() {
  }

  /**
   * show error alert
   * @param title
   * @param msg
   */
  showErrorDialg(title, msg) {
    this.dialog.open(ErrorDialogComponent, {
      width: '350px',
      data: {
        title: title,
        msg: msg
      }
    });
  }

  updateUser(user) {
    User.currentUser = user;
    this.storage.set(AppComponent.KEY_USER, user);
  }
}
