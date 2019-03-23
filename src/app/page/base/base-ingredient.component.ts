import {BaseComponent} from './base.component';
import {Component, Inject, OnInit} from '@angular/core';
import {Ingredient} from '../../models/ingredient';
import {Router} from '@angular/router';
import {SpinnerOverlayService} from '../../services/spinner-overlay.service';
import {MatDialog} from '@angular/material';
import {DataStoreService} from '../../services/data-store.service';
import {FirebaseManager} from '../../helpers/firebase-manager';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-base-ingredient',
  template: ''
})
export class BaseIngredientComponent extends BaseComponent {

  ingAll: Array<Ingredient> = [];

  // ingredient form
  ingName = '';
  ingUnit = '';
  ingQuantity: number;

  constructor(
    public dialog: MatDialog,
    public dataStore: DataStoreService,
    @Inject(SESSION_STORAGE) public storage?: StorageService
  ) {
    super(dialog, storage);

    this.ingAll = this.dataStore.ingredients;
  }

  fetchAllIngredients(): Promise<void> {
    // fetch all ingredients
    const dbRef = FirebaseManager.ref();

    const query = dbRef.child(Ingredient.TABLE_NAME);
    return query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryIng = [];

        snapshot.forEach(function(child) {
          const i = new Ingredient(child);

          aryIng.push(i);
        });

        this.ingAll = aryIng;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
