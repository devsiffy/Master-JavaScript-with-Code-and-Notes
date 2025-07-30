// Object Destructuring

const user = {
  id: 1,
  username: "devsiffy",
  email: "dev@google.com",
  isLoggedIn: false,
};

const { username } = user;
// console.log(username);

const { email: email_addr } = user;
// console.log(email_addr);
