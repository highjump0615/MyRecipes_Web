import {Inject, Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {User} from '../models/user';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {AppComponent} from '../app.component';
import {FirebaseManager} from '../helpers/firebase-manager';
import {Shopping} from '../models/shopping';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log('auth guard');

    const path = next.data['path'];
    if (path === 'logout') {
      // clear current user
      FirebaseManager.getInstance().signOut();
      User.currentUser = null;

      // clear storage
      this.storage.remove(AppComponent.KEY_USER);

      // redirect to login
      this.router.navigate(['login']);

      return false;
    }

    // check authentication state
    if (!User.currentUser) {
      const userObj = this.storage.get(AppComponent.KEY_USER);
      if (!userObj) {
        const value = this.storage.get(AppComponent.KEY_ONBOARD);
        if (!value) {
          // app is opened for the first time
          this.router.navigate(['onboard']);
        } else {
          // redirect to login, except from login page itself
          if (path === 'login') {
            return true;
          }

          this.router.navigate(['login']);
        }

        return false;
      }

      User.currentUser = new User().deserialize(userObj);
    }

    //
    // fetch shopping list
    //
    const aryShopping = [];
    for (const shopping of User.currentUser.shoppingList) {
      if (!(shopping instanceof Shopping)) {
        aryShopping.push(new Shopping().deserialize(shopping));
      } else {
        aryShopping.push(shopping);
      }
    }
    User.currentUser.shoppingList = aryShopping;


    if (path === 'login') {
      this.router.navigate(['home']);
      return false;
    } else if (path === 'home') {
      // redirect to recipes page when admin user
      if (User.currentUser.isAdmin()) {
        this.router.navigate(['myrecipes']);
        return false;
      }
    }

    return true;
  }
}
