import {Component, Inject, OnInit} from '@angular/core';
import {Cuisine} from '../../models/cuisine';
import {FirebaseManager} from '../../helpers/firebase-manager';
import {User} from '../../models/user';
import {BaseComponent} from '../base/base.component';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {BaseCuisineComponent} from '../base/base-cuisine.component';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent extends BaseCuisineComponent implements OnInit {

  constructor(
    @Inject(SESSION_STORAGE) public storage: StorageService
  ) {
    super(storage, true);
  }

  ngOnInit() {
  }

  onSelectItem(param) {
    console.log(param);

    const userCurrent = User.currentUser;

    switch (param.index) {
      case this.CUISINE_FAVOURITE:
        userCurrent.addFavouriteCuisine(param.cuisine);
        break;

      case this.CUISINE_ALLERGY:
        userCurrent.addAllergy(param.cuisine);
        break;

      case this.CUISINE_DIET:
        userCurrent.addDiet(param.cuisine);
        break;

      case this.CUISINE_DISLIKE:
        userCurrent.addDislike(param.cuisine);
        break;
    }

    this.updateUser(userCurrent);
  }

}
