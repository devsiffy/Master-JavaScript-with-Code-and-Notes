// Approach 1: to define an array

const arr_1 = [1, 2, 3, 4, 5, 9, 10, 11];

// Approach 2: to define an array

const arr_2 = new Array("thor", "ironman", "spiderman");

// Array Methods

// arr_1.push(6);
// arr_1.push(7, 8);

// arr_1.pop();

// arr_1.unshift(0);
// arr_1.unshift(-1, 0);

// arr_1.shift();

// console.log(arr_1);

// console.log(arr_1.includes(4));
// console.log(arr_1.includes(15));

// console.log(arr_1.indexOf(4));
// console.log(arr_1.indexOf(14));

const arr_3 = arr_1.join();
// console.log(arr_3, typeof arr_3);

// console.log("A : ", arr_1);

const arr_4 = arr_1.slice(2, 5);
// console.log(arr_4);
// console.log("B : ", arr_1);

const arr_5 = arr_1.splice(2, 5);
// console.log(arr_5);
// console.log("C : ", arr_1);
