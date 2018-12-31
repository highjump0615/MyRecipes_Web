import {FirebaseManager} from '../helpers/firebase-manager';
import DataSnapshot = firebase.database.DataSnapshot;
import {BaseModel} from './base-model';

export class User extends BaseModel {
  static currentUser: User;

  //
  // table info
  //
  static TABLE_NAME = 'users';
  static FIELD_EMAIL = 'email';
  static FIELD_FIRSTNAME = 'firstName';
  static FIELD_LASTNAME = 'lastName';
  static FIELD_PHOTO = 'photoUrl';
  static FIELD_DESC = 'description';

  // cuisines
  static TABLE_NAME_FAVOURITE_CUISINE = 'userFavouriteCuisines';
  static TABLE_NAME_ALLERGY = 'userAllergies';
  static TABLE_NAME_DIET = 'userDiets';
  static TABLE_NAME_DISLIKE = 'userDislikes';

  email = '';
  firstName = '';
  lastName = '';
  desc = '';
  photoUrl = '';

  favouriteCuisines: any;
  allergies: any;
  diets: any;
  dislikes: any;

  constructor(withId?: string);
  constructor(withId: string, snapshot?: DataSnapshot);
  constructor(withId?: string, snapshot?: DataSnapshot) {
    super();

    if (snapshot) {
      super(snapshot);

      const info = snapshot.val();

      this.email = info[User.FIELD_EMAIL];
      this.firstName = info[User.FIELD_FIRSTNAME];
      this.lastName = info[User.FIELD_LASTNAME];
      this.photoUrl = info[User.FIELD_PHOTO];
      this.desc = info[User.FIELD_DESC];
    }

    if (withId) {
      this.id = withId;
    }
  }

  static readFromDatabase(withId: string, completion: (User?) => void) {
    const userRef = FirebaseManager.ref().child(User.TABLE_NAME).child(withId);

    userRef.once('value')
      .then((snapshot) => {
        if (!snapshot.exists()) {
          completion();
          return;
        }

        const user = new User(null, snapshot);
        completion(user);
      })
      .catch((err) => {
        console.log(err);

        completion();
      });
  }

}
