/*
    Everthing is an Object in JS
*/

function multiplyByFive(num) {
  return num * 5;
}

// Inserting properties like in objects
multiplyByFive.working = "Multiplication";

// console.log(multiplyByFive(2));
// console.log(multiplyByFive.working);
// console.log(multiplyByFive.prototype);

/*
    'new' and 'this' in prototype
*/

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

// Wrong way
// const userTwo = createUser("M Umair", 8);
// userTwo.printMe(); // Error

// Right way
// const userOne = new createUser("devsiffy", 10);
// userOne.printMe();

/*
    Prototype (for all objects & for specific datatype)
*/

let myName = "M Umair      ";
let myUsername = "         devsiffy";

String.prototype.trueLength = function () {
  console.log("True length of string is: ", this.trim().length);
};

// myName.trueLength();
// myUsername.trueLength();

let marvalHeros = ["hulk", "ironman"];

let heroPower = {
  hulk: "powerful",
  ironman: "intelligent",

  getSpiderPower: function () {
    console.log(`Ironman is ${this.ironman}`);
  },
};

Object.prototype.greet = function () {
  console.log("greet is present in all objects..!");
};

// marvalHeros.greet();
// heroPower.greet();

Array.prototype.msg = function () {
  console.log("msg is present in all arrays..!");
};

// marvalHeros.msg();
// heroPower.msg(); // Error

/*
    Inheritance
*/

const User = {
  name: "dev",
  email: "dev@gmail.com",
};

const Teacher = {
  makeVideos: true,
};

Teacher.__proto__ = User; // inherit (approach 1)
// console.log(Teacher.name);
// console.log(Teacher.email);
// console.log(Teacher.makeVideos);

const TeachingSupport = {
  isAvailable: true,
};

const TASupport = {
  makeAssignment: "JS Assignments",
  fullTime: false,
  __proto__: TeachingSupport, // inherit (approach 2)
};

// console.log(TASupport.isAvailable);
// console.log(TASupport.makeAssignment);
// console.log(TASupport.fullTime);

// Modern Syntax (above is older syntax)

Object.setPrototypeOf(TeachingSupport, Teacher); // inherit
// console.log(TeachingSupport.makeVideos);
// console.log(TeachingSupport.isAvailable);
