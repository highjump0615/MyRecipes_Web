import DataSnapshot = firebase.database.DataSnapshot;
import {BaseModel} from './base-model';

export class Cuisine extends BaseModel {

  //
  // table info
  //
  static TABLE_NAME = 'cuisines';
  static TABLE_NAME_ALLERGY = 'allergies';
  static TABLE_NAME_DISLIKE = 'dislikes';
  static FIELD_NAME = 'name';

  INIT_KEY = 'init';

  name = '';
  selected = false;

  tableName() {
    return Cuisine.TABLE_NAME;
  }

  constructor(snapshot?: DataSnapshot) {
    super(snapshot);

    if (snapshot) {
      const info = snapshot.val();

      this.name = info[Cuisine.FIELD_NAME];
    } else {
      this.id = this.INIT_KEY;
    }
  }

  isInitData() {
    return this.id === this.INIT_KEY;
  }

}
