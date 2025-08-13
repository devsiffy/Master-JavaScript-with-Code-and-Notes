/*
    As you know, you can't change the value of PI in Math,
    we see again below;
*/

// console.log(Math.PI);
// Math.PI = 5; // Doesn't give an Error
// console.log(Math.PI); // But not changed

/*
    Now, if its a constant so why it gives any error? and
    also you can see there is no change in PI's value.

    So, some hidden properties (you can say configuration)
    behind these are set. You can see these like this;
*/

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
/*
    In the console, you can see some properties are false "disabled"
    for the PI that's make it like constant but don't give any error
*/
// console.log(descriptor);

/*
    If you want to define these types of configuration for
    you object you can do that (below);
*/

const user = {
  username: "devsiffy",
  email: "dev@google.com",
  isLoggedIn: false,

  getUserInfo: function () {
    console.log(`username is: @${this.username}`);
  },
};

// console.log(user);

// To disable any property to override e.g., PI in Math
Object.defineProperty(user, "username", {
  writable: false,
});

// console.log(user.username);
// user.username = "M Umair"; // Not Changed
// console.log(user.username);

// iterating object
// for (let [key, value] of Object.entries(user)) {
//   if (typeof value !== "function") {
//     console.log(`${key} : ${value}`);
//   }
// }

// to disable iterating any property of user e.g., username
Object.defineProperty(user, "username", {
  enumerable: false,
});

for (let [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
