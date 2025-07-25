// tell the JS compiler that we are using the modern JS syntax
// "use strict";

// Error! because we are using NodeJS (not JS in browser where DOM exist)
// alert(3 + 3);

/*
    Datatypes in JS;
    => Premitive
    1. string
    2. numbers
    3. boolean
    4. null
    5. undefined
    6. symbol
    7. biginit (represent by suffix 'n' in the value)

    => Non-Premitive
    1. arrays
    2. objects
    3. date
*/

let string = "hello world";
let number = 18;
let boolean = true;
let empty = null;
let value = undefined;
let symbol = Symbol("symbol");
let big_value = 981298794739863781232n;

// console.table({ string, number, boolean, empty, value, symbol, big_value });

/*
    'typeof' keyowrd used to print what type of value stored in a variable,
    we can use it in two ways;
    1. typeof value
    2. typeof(value)
*/

console.table({
  string: typeof string,
  number: typeof number,
  boolean: typeof boolean,
  empty: typeof empty,
  value: typeof value,
  symbol: typeof symbol,
  big_value: typeof big_value,
});
