import {BaseModel} from './base-model';
import DataSnapshot = firebase.database.DataSnapshot;

export class Menu extends BaseModel {

  constructor(snapshot?: DataSnapshot) {
    super(snapshot);
  }

}
