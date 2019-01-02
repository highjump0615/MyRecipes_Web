import {Component, Inject, OnInit} from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {Router} from '@angular/router';
import {FirebaseManager} from './helpers/firebase-manager';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  static KEY_ONBOARD = 'onboard';
  static KEY_USER = 'current_user';

  title = 'app';

  constructor(
    public router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {
    // init firebase
    if (FirebaseManager.getInstance()) {
      console.log('firebase loaded');
    }
  }
  ngOnInit() {
  }
}
