import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Shopping} from '../../models/shopping';
import {DataStoreService} from '../../services/data-store.service';
import {FirebaseManager} from '../../helpers/firebase-manager';
import {Recipe} from '../../models/recipe';
import {User} from '../../models/user';

@Injectable()
export class ShoppingCreateResolver implements Resolve<Shopping> {
  constructor(
    public dataStore: DataStoreService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Shopping> | Promise<Shopping> | Shopping {

    const id = route.paramMap.get('id');
    const userCurrent = User.currentUser;
    let shopping = null;

    for (const s of userCurrent.shoppingList) {
      if (s.id === id) {
        shopping = s;
        break;
      }
    }

    if (shopping) {
      return shopping.fetchIngredient() as Promise<Shopping>;
    } else {
      return null;
    }
  }

}
