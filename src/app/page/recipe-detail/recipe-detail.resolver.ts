import {Recipe} from '../../models/recipe';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipeDetailResolver implements Resolve<Recipe> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
    const id = route.paramMap.get('id');

    return Recipe.readFromDatabase(id);
  }
}
