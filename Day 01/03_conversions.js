/*
    Here below we see the different type of conversion operations;
*/

// ===> Conversion into Number <===

// let value_1 = "33";
// let value_1 = "33abc";
// let value_1 = null;
let value_1 = undefined;

// console.log("Original Value: ", value_1);
// console.log("Original Value (type): ", typeof value_1);

// let intoNumber = Number(value_1);
// console.log("Converted Value: ", intoNumber);
// console.log("Converted Value (type): ", typeof intoNumber);

/*
    NOTE:-
    In above, string including characters gives an output 'NaN'
    after converting into Number().
    Its long form is "Not a Number" but its type is a "number".
*/

// ===> Conversion into Boolean <===

// let value_2 = 1;
// let value_2 = 12;
// let value_2 = 0;
// let value_2 = "devsiffy";
// let value_2 = "";
// let value_2 = null;
let value_2 = undefined;

// console.log("Original Value: ", value_2);
// console.log("Original Value (type): ", typeof value_2);

// let intoBoolean = Boolean(value_2);
// console.log("Converted Value: ", intoBoolean);
// console.log("Converted Value (type): ", typeof intoBoolean);

// ===> Conversion into String <===

// let value_3 = 123;
// let value_3 = true;
// let value_3 = null;
let value_3 = undefined;

console.log("Original Value: ", value_3);
console.log("Original Value (type): ", typeof value_3);

let intoString = String(value_3);
console.log("Converted Value: ", intoString);
console.log("Converted Value (type): ", typeof intoString);
