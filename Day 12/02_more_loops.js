// Array

const numArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// String

const str = "Good Morning!";

/*
    MAP
    In JavaScript, a Map is a collection of key-value pairs where keys can be any type and the order is preserved. It's different from an Object, which only allows string or symbol keys and doesn't guarantee order.
*/

const map = new Map();
map.set("JS", "JavaScript");
map.set("PY", "Python");
map.set("TXT", "Text");

// Object

const obj = {
  username: "devsiffy",
  email: "dev@gmail.com",
  phoneNo: "+92123456789",
};

/*
    -------------
    for...of Loop
    -------------
*/

// loop on array

// for (const num of numArr) {
//   console.log(num);
// }

// loop on string

// for (const char of str) {
//   console.log(char);
// }

// loop on map

// for (const key of map) {
//   console.log(key);
// }

// for (const [key, value] of map) {
//   console.log(`${key} :- ${value}`);
// }

// loop on object - Error (not work on object)

// for (const val of obj) {
//   console.log(val);
// }

/*
    -------------
    for...in Loop
    -------------
*/

// loop on object

// for (const key in obj) {
//   console.log("Key: ", key);
//   console.log("Value: ", obj[key]);
// }

// loop on array

// for (const val in numArr) {
//   console.log(`${val} => ${numArr[val]}`);
// }

// loop on map - No Error (but not work on map)

// for (const key in map) {
//   console.log(key);
// }

/*
    forEach Loop (Higher Order Loop)
    -> prototype method of array
    -> mostly used on array of objects
    -> takes callback
*/

// numArr.forEach((num) => {
//   console.log("Value is: ", num);
// });

const arr = [
  {
    name: "UnknownIP",
    email: "unknownip@gmail.com",
  },
  {
    name: "Farooq",
    email: "farooq@gmail.com",
  },
  {
    name: "Junaid",
    email: "junaid@gmail.com",
  },
];

// arr.forEach((obj, idx, arr) => {
//   console.log(`Index: ${idx}`);
//   console.log(`Object Name: ${obj.name}`);
//   console.log(`Object Email: ${obj.email}`);
//   console.log(`Array List: ${arr}`);
//   console.log("-----------------------------");
// });
