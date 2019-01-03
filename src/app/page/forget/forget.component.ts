import { Component, OnInit } from '@angular/core';
import {FirebaseManager} from '../../helpers/firebase-manager';
import {BaseComponent} from '../base/base.component';
import {MatDialog} from '@angular/material';
import {SpinnerOverlayService} from '../../services/spinner-overlay.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent extends BaseComponent implements OnInit {

  email = '';

  constructor(
    private overlay: SpinnerOverlayService,
    public dialog: MatDialog
  ) {
    super(dialog);
  }

  ngOnInit() {
  }

  onSubmit() {

    this.overlay.show();

    const that = this;

    FirebaseManager.auth().sendPasswordResetEmail(this.email)
      .then(function() {
        that.overlay.hide();

        // Email sent.
        that.showErrorDialg(
          'Reset Password',
          'Password reset has been sent to your email address.');
      })
      .catch(function(error) {
        that.overlay.hide();

        // show error alert
        that.showErrorDialg('Reset Failed', error.message);
      });
  }
}
