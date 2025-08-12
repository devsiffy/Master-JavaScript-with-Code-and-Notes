// classes are concepts of ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  changePassword() {
    return `${this.password}#$%`;
  }

  capitalizeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

// const userOne = new User("dev", "dev@gmail.com", "123");
// console.log(userOne);
// console.log(userOne.changePassword());
// console.log(userOne.capitalizeUsername());

/*
    Basically, this above classes concept is the modern ES6
    concept, but before ES6 OR the bahind the scene of classes
    is like this (below).
*/

function CreateUser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

CreateUser.prototype.changePassword = function () {
  return `${this.password}#$%`;
};

CreateUser.prototype.capitalizeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

// const user = new CreateUser("devsiffy", "dev@yahoo.com", "123");
// console.log(user);
// console.log(user.changePassword());
// console.log(user.capitalizeUsername());
