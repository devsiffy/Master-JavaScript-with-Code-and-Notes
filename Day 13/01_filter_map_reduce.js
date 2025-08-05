const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ----- filter(callback(value))

const newNums1 = myNums.filter((num) => num > 6);
// console.log(newNums1);

// ----- map(callback(value))

const newNums2 = myNums.map((num) => num * 10);
// console.log(newNums2);

// ----- reduce(callback(accumulator, value), initialValue)

let initialValue = 0;
const totalSum = myNums.reduce((acc, currVal) => acc + currVal, initialValue);
// console.log(totalSum);

// ----- method chaining

const newNums3 = myNums
  .map((val) => val * 10)
  .map((val) => val + 1)
  .filter((val) => val > 50);
// console.log(newNums3);
