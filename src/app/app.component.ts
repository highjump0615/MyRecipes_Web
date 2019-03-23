import {Component, Inject, OnInit} from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from '@angular/router';
import {FirebaseManager} from './helpers/firebase-manager';
import {User} from './models/user';
import {SpinnerOverlayService} from './services/spinner-overlay.service';

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
    private overlay: SpinnerOverlayService
  ) {
    // init firebase
    if (FirebaseManager.getInstance()) {
      console.log('firebase loaded');
    }

    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  ngOnInit() {
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.overlay.show();
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.overlay.hide();
    }
  }
}
