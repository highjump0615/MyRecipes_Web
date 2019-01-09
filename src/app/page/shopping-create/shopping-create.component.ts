import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BaseIngredientComponent} from '../base/base-ingredient.component';
import {MatDialog} from '@angular/material';
import {DataStoreService} from '../../services/data-store.service';
import {Ingredient} from '../../models/ingredient';
import {Shopping} from '../../models/shopping';
import {Recipe} from '../../models/recipe';
import {User} from '../../models/user';
import {Location} from '@angular/common';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-shopping-create',
  templateUrl: './shopping-create.component.html',
  styleUrls: ['./shopping-create.component.scss']
})
export class ShoppingCreateComponent extends BaseIngredientComponent implements OnInit {

  shopping: Shopping;
  shoppingName = '';

  expanded = false;
  selectedIndex = -1;

  ingShopping: Array<Ingredient> = [];

  @ViewChild('expandContent') expandContent;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public dataStore: DataStoreService,
    private location: Location,
    @Inject(SESSION_STORAGE) public storage: StorageService
  ) {
    super(dialog, dataStore, storage);

    const listId = this.route.snapshot.params['id'];

    if (!listId) {
      // new page, expand list
      this.expanded = true;
    }

    this.fetchAllIngredients();
  }

  ngOnInit() {
    // init from resolved data
    this.shopping = this.route.snapshot.data['shopping'];
    if (this.shopping) {
      this.shoppingName = this.shopping.name;
      this.ingShopping = this.shopping.ingredients;
    }

    this.expandList(this.expanded, false);
  }

  expandList(expand, animation = true) {
    const content = jQuery(this.expandContent.nativeElement);

    if (expand) {
      // show
      content.slideDown(animation ? 350 : 0);
    } else {
      // hide
      content.slideUp(animation ? 350 : 0);
    }

    this.expanded = expand;
  }

  onButCountDec() {
    this.ingQuantity = Math.max(1, this.ingQuantity - 1);
  }

  onButCountInc() {
    this.ingQuantity = Math.max(1, this.ingQuantity + 1);
  }

  onToggleExpand() {
    this.expandList(!this.expanded);
  }

  onSelectIngredient(i) {
    this.selectedIndex = i;

    if (i < 0) {
      // clear
      this.ingName = '';
      this.ingUnit = '';
      this.ingQuantity = null;
    } else {
      // update ingredient add form
      this.ingName = this.ingAll[i].name;
      this.ingUnit = this.ingAll[i].unit;

      if (!this.ingQuantity) {
        this.ingQuantity = 1;
      }
    }
  }

  /**
   * add ingredient from list
   */
  onAddIngredient() {
    const ingredient = this.ingAll[this.selectedIndex].clone();
    ingredient.quantity = this.ingQuantity;

    // add to ingredient list
    this.ingShopping.push(ingredient);

    // clear selection
    this.onSelectIngredient(-1);
  }

  onRemoveIng(index) {
    this.ingShopping.splice(index, 1);
  }

  /**
   * save shopping list
   */
  onSave() {
    const userCurrent = User.currentUser;

    let shoppingNew = this.shopping;
    if (!shoppingNew) {
      shoppingNew = new Shopping();
    }

    shoppingNew.ingredients = this.ingShopping;
    shoppingNew.name = this.shoppingName;

    shoppingNew.saveToDatabase(null, userCurrent.id);

    // save
    if (this.shopping) {
      // overwrite
      let nIndex = -1;
      for (const s of userCurrent.shoppingList) {
        nIndex++;
        if (s.equalTo(this.shopping)) {
          break;
        }
      }

      if (nIndex < userCurrent.shoppingList.length) {
        userCurrent.shoppingList[nIndex] = shoppingNew;
      }
    } else {
      // new add
      userCurrent.shoppingList.push(shoppingNew);
    }

    this.updateUser(userCurrent);

    // back to home page
    this.location.back();
  }
}
