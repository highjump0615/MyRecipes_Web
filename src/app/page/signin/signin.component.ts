import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SpinnerOverlayService} from '../../services/spinner-overlay.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  email = '';

  constructor(
    private router: Router,
    private overlay: SpinnerOverlayService
  ) { }

  ngOnInit() {
  }

  onButForget() {
    // go to forget password page
    this.router.navigate(['forget']);
  }

  onSignin() {
    console.log('asdf');

    this.overlay.show();
  }
}
