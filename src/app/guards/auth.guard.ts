import {Inject, Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {User} from '../models/user';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {AppComponent} from '../app.component';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const userCurrent = this.storage.get(AppComponent.KEY_USER);

    const path = next.data['path'];

    console.log('auth guard');

    // check authentication state
    if (!userCurrent) {
      const value = this.storage.get(AppComponent.KEY_ONBOARD);
      if (!value) {
        // app is opened for the first time
        this.router.navigate(['onboard']);
      } else {
        this.router.navigate(['login']);
      }

      return false;
    }

    if (path === 'login') {
      this.router.navigate(['home']);
      return false;
    }

    return true;
  }
}
