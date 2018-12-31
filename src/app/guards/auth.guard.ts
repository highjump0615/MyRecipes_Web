import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {User} from '../models/user';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {

    console.log('init auth guard');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log('auth guard');

    // check authentication state
    if (!User.currentUser) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
