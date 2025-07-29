// ----- Another approach to define object
const user_1 = new Object();

user_1.id = "abc123";
user_1.name = "Unknown";
user_1.isLoggedIn = false;

// console.log(user_1);

const user_2 = {
  email: "some@gmail.com",
  nameInfo: {
    userInfo: {
      firstName: "Unknown",
      lastName: "IP",
    },
  },
};

// console.log(user_2.nameInfo);
// console.log(user_2.nameInfo.userInfo);
// console.log(user_2.nameInfo.userInfo.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = { obj1, obj2, obj3 };
// console.log(obj4);

// to combine multiple objects
const obj5 = Object.assign(obj1, obj2);
// console.log(obj5);

// to combine multiple objects - must return an objects
const obj6 = Object.assign({}, obj1, obj2);
// console.log(obj6);

// to combine multiple objects - using spread operator
const obj7 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj7);

// array of objects

const user = [
  {
    id: 1,
    email: "user1@gmail.com",
  },
  {
    id: 2,
    email: "user2@gmail.com",
  },
  {
    id: 3,
    email: "user3@gmail.com",
  },
];

// console.log(user[0].id);
// console.log(user[0].email);
// console.log(user[1].email);

const regularUser = {
  id: 1,
  name: "devsiffy",
  email: "dev@google.com",
  isLoggedIn: false,
};

// to get all keys of an object in an array
// console.log(Object.keys(regularUser));

// to get all values of an object in an array
// console.log(Object.values(regularUser));

// to get all key-value of an object in array of arrays
// console.log(Object.entries(regularUser));

// to check that specific property exist in an object
// console.log(regularUser.hasOwnProperty("isLoggedIn"));
// console.log(regularUser.hasOwnProperty("age"));
