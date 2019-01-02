import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataStoreService} from '../../../services/data-store.service';
import {Utils} from '../../../helpers/utils';

@Component({
  selector: 'app-signup-password',
  templateUrl: './signup-password.component.html',
  styleUrls: ['../signup-email/signup-email.component.scss']
})
export class SignupPasswordComponent implements OnInit {

  password = '';

  isAtleast6 = false;
  isUppercase = false;
  isLowercase = false;
  isNumber = false;

  constructor(
    private router: Router,
    private dataStore: DataStoreService
  ) {
  }

  ngOnInit() {
  }

  onNext() {
    this.dataStore.signupPassword = this.password;

    // go to signup profile page
    this.router.navigate(['signup/profile']);
  }

  onChangeText() {
    // clear all checkboxes
    this.isAtleast6 = false;
    this.isUppercase = false;
    this.isLowercase = false;
    this.isNumber = false;

    // check input validity
    if (this.password.length >=6) {
      this.isAtleast6 = true;
    }
    if (Utils.stringContainUppercase(this.password)) {
      this.isUppercase = true;
    }
    if (Utils.stringContainLowercase(this.password)) {
      this.isLowercase = true;
    }
    if (Utils.stringContainNumber(this.password)) {
      this.isNumber = true;
    }
  }
}
