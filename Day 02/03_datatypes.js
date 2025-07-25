/*
    Two types of datatypes in JS;
    => Premitive Datatypes
    1. string
    2. numbers
    3. boolean
    4. null
    5. undefined
    6. symbol
    7. biginit (represent by suffix 'n' in the value)
*/

let string = "hello world";
let number = 18;
let boolean = true;
let empty = null;
let value = undefined;
let symbol = Symbol("abc123");
let big_value = 981298794739863781232n;

// console.table({ string, number, boolean, empty, value, symbol, big_value });

/*
    'typeof' keyowrd used to print what type of value stored in a variable,
    we can use it in two ways;
    1. typeof value
    2. typeof(value)
*/

// console.table({
//   string: typeof string,
//   number: typeof number,
//   boolean: typeof boolean,
//   empty: typeof empty,
//   value: typeof value,
//   symbol: typeof symbol,
//   big_value: typeof big_value,
// });

/*
    => Reference Type (also known as Non-Premitive Datatypes)
    1. arrays
    2. objects
    3. functions
*/

const arr = ["Apple", "Orange", "Banana"];

const obj = {
  id: 3031,
  name: "M Farooq",
  GPA: 3.24,
  isLoggedIn: true,
};

const greet = function () {
  console.log("Good Morning..!");
};

// console.log(arr);
// console.log(obj);
// greet();

// console.table({
//   arr: typeof arr,
//   obj: typeof obj,
//   greet: typeof greet,
// });

// ***** Tricky Datatypes *****

console.log(typeof null);
console.log(typeof undefined);
