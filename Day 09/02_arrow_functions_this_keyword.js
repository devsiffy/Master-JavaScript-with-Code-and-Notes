/*
    'this' keyword context in the object's function
*/

const obj = {
  username: "devsiffy",
  email: "dev@google.com",
  welcomeMsg: function () {
    console.log(this); // refer this current object
    console.log(`${this.username}, welcome to website`);
  },
};

// obj.welcomeMsg(); // use the obj's username value
// obj.username = "mumair";
// obj.welcomeMsg(); // updated obj's username value

/*
    Remember:-
    In NodeJS environment, global context of 'this' keyword.
    But in browser environment, where DOM exist then the global context of 'this' keyword is the "window" object
*/

// console.log(this); // prints an empty object

/* 
    "Arrow functions" are simple functions only use function expression for declaration.
    'arrFunc' is a normal arrow function
    'arrFunc2' with parameters and implicit return
    'arrFunc3' with parameters and implicit return of object
*/

const arrFunc = () => {
  console.log("I am an arrow function..!");
};
// arrFunc(); // works fine

const arrFunc2 = (num1, num2) => num1 + num2;
// console.log(arrFunc2(2, 3));

const arrFunc3 = () => ({ username: "dev" });
// console.log(arrFunc3);

/*
    Context of 'this' keyword in different types of functions, like
    -> Regular Functions
    -> Function Expressions
    -> Arrow Functions
*/

function newFunc() {
  const value = "I am a value";
  console.log(this);
  console.log(this.value);
}
// newFunc();

const newFunc2 = function () {
  const value = "I am a value";
  console.log(this);
  console.log(this.value);
};
// newFunc2();

const newFunc3 = () => {
  const value = "I am a value";
  console.log(this);
  console.log(this.value);
};
// newFunc3();
