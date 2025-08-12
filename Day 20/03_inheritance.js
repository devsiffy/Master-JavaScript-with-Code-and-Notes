class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  logMe() {
    console.log(`username is: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course is added by ${this.username}`);
  }
}

const teacherOne = new Teacher("junaid", "junaid@gmail.com", "123abc");
// console.log(teacherOne);
// teacherOne.logMe();
// teacherOne.addCourse();

const userOne = new User("demo", "demo@gmail.com", "456cba");
// console.log(userOne);
// userOne.logMe();

/*
    'instanceof' operator
*/

// console.log(userOne instanceof User);
// console.log(teacherOne instanceof User);
// console.log(teacherOne instanceof Teacher);
