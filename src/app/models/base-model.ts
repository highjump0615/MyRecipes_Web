import DataSnapshot = firebase.database.DataSnapshot;
import {FirebaseManager} from '../helpers/firebase-manager';

export interface Deserializable {
  deserialize(input: any): this;
}

export class BaseModel {

  //
  // table info
  //
  static FIELD_DATE = 'createdAt';

  id = '';
  createdAt = FirebaseManager.getInstance().getServerLongTime();

  constructor();
  constructor(snapshot: DataSnapshot);
  constructor(snapshot?: DataSnapshot) {
    if (snapshot) {
      this.id = snapshot.key;

      const info = snapshot.val();
      this.createdAt = info[BaseModel.FIELD_DATE];
    }
  }

  tableName() {
    // virtual func
    return 'base';
  }

  toDictionary() {
    const dict = [];
    dict[BaseModel.FIELD_DATE] = this.createdAt;

    return dict;
  }

  addDictitem(dict, field, value) {
    if (value) {
      dict[field] = value;
    }
  }

  private getDatabaseRef(withID?: string, parentID?: string) {
    let strDb = this.tableName();
    if (parentID) {
      strDb += '/' + parentID;
    }

    const database = FirebaseManager.ref().child(strDb);

    if (withID) {
    } else if (!this.id) {
      this.id = database.push().key;
    }

    return database.child(this.id);
  }

  /**
   * save entire object to database
   *
   * @param withID
   * @param parentID
   */
  saveToDatabase(withID?: string, parentID?: string) {
    const db = this.getDatabaseRef(withID, parentID);
    db.set(this.toDictionary());
  }

  saveToDatabaseWithField(field: string,
                          value: any,
                          onComplete?: (err: Error | null) => any,
                          withID?: string,
                          parentID?: string) {

    const db = this.getDatabaseRef(withID, parentID);
    db.child(field).set(value, onComplete);
  }

}
