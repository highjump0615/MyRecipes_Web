import {FirebaseManager} from '../helpers/firebase-manager';
import DataSnapshot = firebase.database.DataSnapshot;
import {BaseModel, Deserializable} from './base-model';
import {Cuisine} from './cuisine';

export class User extends BaseModel implements Deserializable {
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
  static FIELD_TYPE = 'type';

  // cuisines
  static TABLE_NAME_FAVOURITE_CUISINE = 'userFavouriteCuisines';
  static TABLE_NAME_ALLERGY = 'userAllergies';
  static TABLE_NAME_DIET = 'userDiets';
  static TABLE_NAME_DISLIKE = 'userDislikes';

  static USER_TYPE_NORMAL = 'normal';
  static USER_TYPE_ADMIN = 'admin';

  //
  // properties
  //
  email = '';
  firstName = '';
  lastName = '';
  desc = '';
  photoUrl = '';

  type = User.USER_TYPE_NORMAL;

  favouriteCuisines: any;
  allergies: any;
  diets: any;
  dislikes: any;
  ////

  fetchCuisineCount = 0;
  fetchedCuisineCount = 0;

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

      if (User.FIELD_TYPE in info) {
        this.type = info[User.FIELD_TYPE];
      }
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
        user.fetchCuisines(() => {
          completion(user);
        });
      })
      .catch((err) => {
        console.log(err);

        completion();
      });
  }

  tableName() {
    return User.TABLE_NAME;
  }

  toDictionary() {
    const dict = super.toDictionary();

    dict[User.FIELD_EMAIL] = this.email;
    dict[User.FIELD_FIRSTNAME] = this.firstName;
    dict[User.FIELD_LASTNAME] = this.lastName;

    this.addDictitem(dict, User.FIELD_PHOTO, this.photoUrl);
    this.addDictitem(dict, User.FIELD_DESC, this.desc);

    return dict;
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  isAdmin() {
    return this.type === User.USER_TYPE_ADMIN;
  }

  //
  // cuisines
  //
  /**
   * add or remove favourite cuisine
   * @param data
   */
  addFavouriteCuisine(data: Cuisine) {
    const dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_FAVOURITE_CUISINE)
      .child(this.id);

    let index = -1;

    if (this.favouriteCuisines) {
      index = this.favouriteCuisines.indexOf(data.id);
    }

    // add
    if (index < 0) {
      // add to db
      dbRef.child(data.id).set(true);

      // init array
      if (!this.favouriteCuisines) {
        this.favouriteCuisines = [];
      }

      if (!data.isInitData()) {
        this.favouriteCuisines.push(data.id);
      }
    } else {
      // remove from db
      dbRef.child(data.id).remove();

      this.favouriteCuisines.splice(index, 1);
    }
  }

  /**
   * add or remove allergy
   * @param data
   */
  addAllergy(data: Cuisine) {
    const dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_ALLERGY)
      .child(this.id);

    let index = -1;

    if (this.allergies) {
      index = this.allergies.indexOf(data.id);
    }

    // add
    if (index < 0) {
      // add to db
      dbRef.child(data.id).set(true);

      // init array
      if (!this.allergies) {
        this.allergies = [];
      }

      if (!data.isInitData()) {
        this.allergies.push(data.id);
      }
    } else {
      // remove from db
      dbRef.child(data.id).remove();

      this.allergies.splice(index, 1);
    }
  }

  /**
   * add or remove diet
   * @param data
   */
  addDiet(data: Cuisine) {
    const dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_DIET)
      .child(this.id);

    let index = -1;

    if (this.diets) {
      index = this.diets.indexOf(data.id);
    }

    // add
    if (index < 0) {
      // add to db
      dbRef.child(data.id).set(true);

      // init array
      if (!this.diets) {
        this.diets = [];
      }

      if (!data.isInitData()) {
        this.diets.push(data.id);
      }
    } else {
      // remove from db
      dbRef.child(data.id).remove();

      this.diets.splice(index, 1);
    }
  }

  /**
   * add or remove dislike
   * @param data
   */
  addDislike(data: Cuisine) {
    const dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_DISLIKE)
      .child(this.id);

    let index = -1;

    if (this.dislikes) {
      index = this.dislikes.indexOf(data.id);
    }

    // add
    if (index < 0) {
      // add to db
      dbRef.child(data.id).set(true);

      // init array
      if (!this.dislikes) {
        this.dislikes = [];
      }

      if (!data.isInitData()) {
        this.dislikes.push(data.id);
      }
    } else {
      // remove from db
      dbRef.child(data.id).remove();

      this.dislikes.splice(index, 1);
    }
  }

  /**
   * fetch cuisines data
   * @param completion
   */
  fetchCuisines(completion: () => void) {
    this.fetchCuisineCount = 0;
    this.fetchedCuisineCount = 0;

    this.fetchCuisineCount++;
    this.fetchFavouriteCuisines(() => {
      this.onFetchedCuisines(completion);
    });

    this.fetchCuisineCount++;
    this.fetchAllergies(() => {
      this.onFetchedCuisines(completion);
    });

    this.fetchCuisineCount++;
    this.fetchDiets(() => {
      this.onFetchedCuisines(completion);
    });

    this.fetchCuisineCount++;
    this.fetchDislikes(() => {
      this.onFetchedCuisines(completion);
    });
  }

  onFetchedCuisines(completion: () => void) {
    this.fetchedCuisineCount++;

    if (this.fetchedCuisineCount === this.fetchCuisineCount) {
      completion();
    }
  }
  fetchFavouriteCuisines(completion: () => void) {
    const that = this;

    const dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_FAVOURITE_CUISINE)
      .child(this.id);

    dbRef.once('value')
      .then((snapshot) => {
        if (snapshot.hasChildren()) {
          that.favouriteCuisines = [];
        }

        snapshot.forEach(function(child) {
          that.favouriteCuisines.push(child.key);
        });

        completion();
      })
      .catch((err) => {
        completion();
      });
  }

  fetchAllergies(completion: () => void) {
    const that = this;

    const dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_ALLERGY)
      .child(this.id);

    dbRef.once('value')
      .then((snapshot) => {
        if (snapshot.hasChildren()) {
          that.allergies = [];
        }

        snapshot.forEach(function(child) {
          that.allergies.push(child.key);
        });

        completion();
      })
      .catch((err) => {
        completion();
      });
  }

  fetchDiets(completion: () => void) {
    const that = this;

    const dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_DIET)
      .child(this.id);

    dbRef.once('value')
      .then((snapshot) => {
        if (snapshot.hasChildren()) {
          that.diets = [];
        }

        snapshot.forEach(function(child) {
          that.diets.push(child.key);
        });

        completion();
      })
      .catch((err) => {
        completion();
      });
  }

  fetchDislikes(completion: () => void) {
    const that = this;

    const dbRef = FirebaseManager.ref()
      .child(User.TABLE_NAME_DISLIKE)
      .child(this.id);

    dbRef.once('value')
      .then((snapshot) => {
        if (snapshot.hasChildren()) {
          that.dislikes = [];
        }

        snapshot.forEach(function(child) {
          that.dislikes.push(child.key);
        });

        completion();
      })
      .catch((err) => {
        completion();
      });
  }

  deserialize(input: any): this {
    Object.assign(this, input);

    return this;
  }

}
