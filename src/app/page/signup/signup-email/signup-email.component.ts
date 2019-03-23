import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Utils} from '../../../helpers/utils';
import {FirebaseManager} from '../../../helpers/firebase-manager';
import {User} from '../../../models/user';
import {DataStoreService} from '../../../services/data-store.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup-email.component.html',
  styleUrls: ['./signup-email.component.scss']
})
export class SignupEmailComponent implements OnInit {

  email = '';

  isEmailValid = false;
  isNotUse = false;

  constructor(
    private router: Router,
    private dataStore: DataStoreService
  ) { }

  ngOnInit() {
  }

  onNext() {
    this.dataStore.signupEmail = this.email;

    // go to signup password page
    this.router.navigate(['signup/password']);
  }

  onChangeText() {
    // disable checkboxes
    this.isEmailValid = false;
    this.isNotUse = false;


    if (Utils.isEmailValid(this.email)) {
      this.isEmailValid = true;

      // check if email has been used
      const database = FirebaseManager.ref();
      const query = database.child(User.TABLE_NAME);
      query.orderByChild(User.FIELD_EMAIL)
        .equalTo(this.email)
        .once('value')
        .then((snapshot) => {
          this.isNotUse = !snapshot.exists();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
