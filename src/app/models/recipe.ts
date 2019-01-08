import {Ingredient} from './ingredient';
import {BaseModel} from './base-model';
import {User} from './user';
import {FirebaseManager} from '../helpers/firebase-manager';
import DataSnapshot = firebase.database.DataSnapshot;
import {Utils} from '../helpers/utils';

export class Recipe extends BaseModel {

  //
  // table info
  //
  static TABLE_NAME = 'recipes';
  static FIELD_TITLE = 'title';
  static FIELD_PHOTO = 'photoUrl';
  static FIELD_SKILL = 'skill';
  static FIELD_SERVING = 'serving';
  static FIELD_INGREDIENT = 'ingredients';
  static FIELD_PREPARATION = 'preparation';
  static FIELD_USERID = 'userId';

  static FIELD_RATE = 'rate';
  static FIELD_RATECOUNT = 'rateCount';

  static SKILL_LOW = 1;
  static SKILL_MEDIUM = 2;
  static SKILL_HIGH = 3;

  //
  // properties
  //
  title = '';
  photoUrl = '';
  skill: number;
  serving: number;
  preparation = '';

  ingredientIds = [];
  ingredients: Array<Ingredient> = [];

  userId = '';
  user: User;

  rate = 0;
  rateCount = 0;
  ////

  fetchIngCount = 0;
  fetchedIngCount = 0;

  constructor(snapshot?: DataSnapshot) {
    super(snapshot);

    if (snapshot) {
      const info = snapshot.val();

      this.title = info[Recipe.FIELD_TITLE];
      this.photoUrl = info[Recipe.FIELD_PHOTO];
      this.skill = info[Recipe.FIELD_SKILL];
      this.serving = info[Recipe.FIELD_SERVING];
      this.preparation = info[Recipe.FIELD_PREPARATION];
      this.userId = info[Recipe.FIELD_USERID];

      // rate
      this.rate = info[Recipe.FIELD_RATE];
      this.rateCount = info[Recipe.FIELD_RATECOUNT];

      // set ingredients
      this.ingredientIds = info[Recipe.FIELD_INGREDIENT];
    }
  }

  static readFromDatabase(withId: string): Promise<Recipe> {

    const dbRef = FirebaseManager.ref()
      .child(Recipe.TABLE_NAME)
      .child(withId);

    const prRecipe = dbRef.once('value')
      .then((snapshot) => {
        if (!snapshot.exists()) {
          return null;
        }

        return new Recipe(snapshot);
      })
      .catch((err) => {
        console.log(err);
      });

    return prRecipe.then((recipe) => {
      if (!recipe) {
        return null;
      }

      return recipe.fetchIngredient();
    });
  }

  tableName() {
    return Recipe.TABLE_NAME;
  }

  toDictionary() {
    const dict = super.toDictionary();

    dict[Recipe.FIELD_TITLE] = this.title;
    dict[Recipe.FIELD_PHOTO] = this.photoUrl;
    dict[Recipe.FIELD_SKILL] = this.skill;
    dict[Recipe.FIELD_SERVING] = this.serving;
    dict[Recipe.FIELD_PREPARATION] = this.preparation;

    const dictIngs = [];
    for (const i of this.ingredients) {
      dictIngs[i.id] = i.quantity;
    }
    dict[Recipe.FIELD_INGREDIENT] = dictIngs;

    // user
    dict[Recipe.FIELD_USERID] = this.userId;

    // rate
    dict[Recipe.FIELD_RATE] = this.rate;
    dict[Recipe.FIELD_RATECOUNT] = this.rateCount;

    return dict;
  }

  skillDesc() {
    if (this.skill === Recipe.SKILL_LOW) {
      return 'Low';
    } else if (this.skill === Recipe.SKILL_MEDIUM) {
      return 'Medium';
    } else {
      return 'High';
    }
  }


  recipeRate() {
    // avoid division by 0
    if (this.rateCount === 0) {
      return 0;
    }

    return this.rate / this.rateCount;
  }

  dateFormatted() {
    return Utils.getInstance().toDateWithDay(this.createdAt);
  }

  /**
   * fetch ingredients data
   */
  fetchIngredient(): Promise<Recipe> {

    // get current index
    const nIndex = this.ingredients.length;

    if (nIndex >= Object.keys(this.ingredientIds).length) {
      // all ingredients are fetched
      return Promise.resolve(this);
    }

    const ingId = Object.keys(this.ingredientIds)[nIndex];

    const dbRef = FirebaseManager.ref()
      .child(Ingredient.TABLE_NAME)
      .child(ingId);

    const that = this;

    return dbRef.once('value')
      .then((snapshot) => {
        if (snapshot.exists()) {
          const ingNew = new Ingredient(snapshot);
          ingNew.quantity = that.ingredientIds[ingId];

          that.ingredients.push(ingNew);
        }

        return that.fetchIngredient();
      });
  }
}
