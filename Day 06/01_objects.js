// ------ Defining Object Literals

const mySymbol = Symbol("key1"); // define for the below object's symbol key

const obj1 = {
  name: "Ahmad",
  age: 18,
  location: "Multan",
  email: "ahmad@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  // we can also define key like below
  "full name": "Ahmad Hassan",
  // to define symbol datatype key-value pair
  [mySymbol]: "This is a symbol value",
};

// we can access the key values like these methods
// console.log(obj1.email);
// console.log(obj1["location"]);

// we access the key like "full name" only like below, NOT using dot operator
// console.log(obj1["full name"]);

// print object: you can identify symbol key
// console.log(obj1);

// if you want that no one can change the values of object
// Object.freeze(obj1);
// obj1.email = "abc123@yahoo.com";
// print object: there is no change in the email value
// console.log(obj1);

// adding key having function as value in an object, to understand how functions work in an object

obj1.greeting = function () {
  console.log("Greeting 1");
};

obj1.greetingTwo = function () {
  console.log(`Greeting 2, with object values: ${this.name}`);
};

// this return the reference of function
// console.log(obj1.greeting);

// to call the key's functions
// console.log(obj1.greeting());
// console.log(obj1.greetingTwo());

/*
    NOTE:- For above console output, you can see every console that
    print function also return an "undefined", we talk about it later
    on topics.
    Also we talk about the "this" keyword properly, later on.
*/
