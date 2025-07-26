/*
    STACK (used by premitive datatypes);
    Premitive datatypes uses stack for storing values, then
    a copy of values are assigned to the variables.
*/

let originalName = "M Umair";
let codeName = originalName;

// console.log(originalName);
// console.log(codeName);

codeName = "devsiffy";

// console.log(originalName); // still same, not changed because a copy of value is assigned to 'codeName'

// console.log(codeName); // update in its own seperate stack memory. That's why don't affect the 'originalName'

/*
    HEAP (used by non-premitive datatypes);
    Non-Premitive datatypes uses heap for storing values, then
    a reference of values are assigned to the variables.
*/

let userOne = {
  email: "junaid@google.com",
  employeeOf: "Google",
};

let userTwo = userOne;

console.log(userOne);
console.log(userTwo);

userTwo.email = "farooq@google.com";

console.log(userOne); // updated
console.log(userTwo); // updated, because it stores reference of 'userOne' not a copy of it
