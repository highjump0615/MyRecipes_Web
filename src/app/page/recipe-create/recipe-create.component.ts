import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../models/ingredient';
import {FirebaseManager} from '../../helpers/firebase-manager';
import {DataStoreService} from '../../services/data-store.service';
import {Router} from '@angular/router';
import {SpinnerOverlayService} from '../../services/spinner-overlay.service';
import {MatDialog} from '@angular/material';
import {BaseComponent} from '../base/base.component';
import {ComboBoxComponent} from '../../components/combo-box/combo-box.component';
import {ImageUploaderComponent} from '../../components/image-uploader/image-uploader.component';
import {Recipe} from '../../models/recipe';
import {User} from '../../models/user';
import {BaseIngredientComponent} from '../base/base-ingredient.component';


@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent extends BaseIngredientComponent implements OnInit {

  @ViewChild('imagePhoto') uploadPhoto: ImageUploaderComponent;

  title = '';
  skill = '';
  serving: number;
  preparation = '';

  ingRecipe: Array<Ingredient> = [];
  cmbIngList: Array<any> = [];

  constructor(
    public router: Router,
    private overlay: SpinnerOverlayService,
    public dialog: MatDialog,
    public dataStore: DataStoreService
  ) {
    super(dialog, dataStore);

    this.fillComboList();

    // fetch all ingredients
    this.fetchAllIngredients().then(() => {
      // fill combo box
      this.fillComboList();
    });
  }

  ngOnInit() {
  }

  fillComboList() {
    console.log(this.ingAll);
    this.cmbIngList = [];

    for (let i = 0; i < this.ingAll.length; i++) {
      const ing = this.ingAll[i];

      const cmbObj = {};
      cmbObj[ComboBoxComponent.KEY_INDEX] = i;
      cmbObj[ComboBoxComponent.KEY_NAME] = ing.name;

      this.cmbIngList.push(cmbObj);
    }
  }

  onAdd() {
    // check image
    if (!this.uploadPhoto.picture) {
      this.showErrorDialg(
        'Photo Missing',
        'Photo needs be added to make a recipe'
      );

      return;
    }

    // check ingredients
    if (this.ingRecipe.length <= 0) {
      this.showErrorDialg(
        'Ingredients Missing',
        'At least 1 ingredient needs to make a recipe'
      );

      return;
    }

    this.overlay.show();

    const userCurrent = User.currentUser;

    // upload photo image
    const photoName = userCurrent.id + Math.floor(Date.now() / 1000);
    const path = 'recipes/' + photoName + '.png';

    FirebaseManager.getInstance().uploadImageTo(
      path,
      this.uploadPhoto.picture,
      (downloadURL, error) => {
        this.overlay.hide();

        if (error) {
          // failed to upload
          this.showErrorDialg('Upload photo failed', error);

          return;
        }

        // add new recipe
        const recipeNew = new Recipe();

        recipeNew.title = this.title;
        recipeNew.photoUrl = downloadURL;
        recipeNew.skill = parseInt(this.skill, 10);
        recipeNew.serving = this.serving;
        recipeNew.ingredients = this.ingRecipe;
        recipeNew.preparation = this.preparation;

        // user info
        recipeNew.user = userCurrent;
        recipeNew.userId = userCurrent.id;

        recipeNew.saveToDatabase();

        this.dataStore.myRecipes.push(recipeNew);

        // back to list page
        this.router.navigate(['myrecipes']);
      });
  }

  /**
   * add ingredient
   */
  onAddIngredient() {
    let ingredient = null;

    // if selected exisiting ingredient
    for (const i of this.ingAll) {
      if (this.ingName === i.name) {
        ingredient = i;
        break;
      }
    }

    // if not, make new one
    if (!ingredient) {
      ingredient = new Ingredient();

      ingredient.name = this.ingName;
      ingredient.unit = this.ingUnit;

      ingredient.saveToDatabase();

      this.dataStore.ingredients.push(ingredient);

      // add to all ingredient list
      this.ingAll.push(ingredient);
      // update combo box
      this.fillComboList();
    }

    ingredient.quantity = this.ingQuantity;

    // add to ingredient list
    this.ingRecipe.push(ingredient);

    // clear input fields
    this.ingName = '';
    this.ingUnit = '';
    this.ingQuantity = null;
  }

  onIngredientChange(event) {
    this.ingName = event;

    // check ingredient and fill unit
    for (const i of this.ingAll) {
      if (i.name === this.ingName) {
        this.ingUnit = i.unit;
        break;
      }
    }
  }

  onRemoveIngRecipe(index) {
    this.ingRecipe.splice(index, 1);
  }
}
