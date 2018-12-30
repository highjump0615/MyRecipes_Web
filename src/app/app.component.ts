import {Component, Inject, NgZone} from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static KEY_ONBOARD = 'onboard';

  title = 'app';

  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {
    this.goToSigninView();
  }

  goToSigninView() {
    const value = this.storage.get(AppComponent.KEY_ONBOARD);
    if (value) {
      // onboard is already shown, go to sign in page directly
      this.router.navigate(['login']);
    } else {
      // app is opened for the first time
      this.router.navigate(['onboard']);
    }
  }
}
