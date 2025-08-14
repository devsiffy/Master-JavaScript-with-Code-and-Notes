/*
    ----- Modern Approach -----
    Getters & Setters in classes
*/

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  /*
    In getters and setters, we don't use the exact name of the
    properties in getters & setters cause a RangeError because
    of the conflict b/w constructor and setter (they both set the
    value). So we use uderscore "_propertyName" in getters and
    setters. But we can access the properties with propertyName.

    In this concept, we assume that these underscore properties
    are private (although we can access them using obj._property)
    but we don't instead of we use getters and setters for get and
    set these properties like this;
    obj.property

    We can get property through getters, they looks like method but
    cause error if we do like this;
    obj.getterPropertyName()
    We access like normal properties;
    obj.getterPropertyName
  */

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }
}

const userOne = new User("dev@gmail.com", "123abc");
// console.log(userOne);

// Wrong way
// console.log(userOne.email()); // Error
// console.log(userOne.password()); // Error

// Right way
// console.log(userOne.email);
// console.log(userOne.password);

/*
  Before # private fields (as in above code)
  Developers usually added an underscore before a property name (e.g., _propertyName) to show it was meant to be private.
  -> This was only a naming habit, not real privacy.
  -> Code outside the class could still read or change it easily.

  But now, Private field with # in JS classes
  -> The # private fields were part of the ECMAScript "Class Fields" proposal, finalized in ES2022. (code below)
  -> Before this, JavaScript had no true language-level private fields.
*/

class FBUser {
  #email;
  #password;

  constructor(email, password) {
    this.#email = email;
    this.#password = password;
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    this.#email = value;
  }

  get password() {
    return this.#password;
  }

  set password(value) {
    this.#password = value;
  }
}

const fbuser = new FBUser("user@demo.com", "2213abc");

// console.log(fbuser);
// console.log(fbuser.#email); // Error
console.log(fbuser.email);
console.log(fbuser.password);

/*
    ------------ Older Approach ------------
    Getters & Setters in constructor function
*/

function GoogleUser(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email;
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const guserOne = new GoogleUser("demo@google.com", "312cba");

// console.log(guserOne);
// console.log(guserOne.email);
// console.log(guserOne.password);

/*
    ----- Older Approach -----
    Getters & Setters in object
*/

const NormalUser = {
  _email: "unknown@gmail.com",
  _password: "201acb",

  get email() {
    return this._email;
  },

  set email(value) {
    this._email = value;
  },

  get password() {
    return this._password;
  },

  set password(value) {
    this._password = value;
  },
};

// Creating instance from object using "Factory Function"
const nuserOne = Object.create(NormalUser);

// console.log(nuserOne);
// console.log(nuserOne.email);
// console.log(nuserOne.password);
