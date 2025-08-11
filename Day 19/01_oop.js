const user = {
  username: "devsiffy",
  email: "dev@google.com",
  signedIn: true,

  getUserInfo: function () {
    console.log(this);
    console.log(this.username);
  },
};

// user.getUserInfo();
// console.log(this);

/*
    This basically a constructor function, and we use 'new'
    keyword to create a new instance of object like userOne
    and userTwo.
    But if we try to create users objects from User() function without using 'new' then they overrides each other because
    of same reference (not have different instances).
*/

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log("Hi, how can I help you? ", this.username);
  };

  return this;
}

const userOne = new User("devsiffy", 3, true);
// console.log(userOne);
// userOne.greeting();
// console.log(userOne.constructor);

const userTwo = new User("M Umair", 2, false);
// console.log(userTwo);
// userTwo.greeting();
// console.log(userTwo.constructor);
