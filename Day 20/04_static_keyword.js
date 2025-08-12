class User {
  constructor(username) {
    this.username = username;
  }

  greet() {
    console.log(`Username is: @${this.username}`);
  }

  static createdId() {
    return "123";
  }
}

const userOne = new User("devsiffy");
userOne.greet();
// userOne.createdId(); // Error
