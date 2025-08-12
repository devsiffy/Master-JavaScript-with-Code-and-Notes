function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  this.email = email;
  this.password = password;

  /*
    Basically, this below is called but its execution context
    removed from the call stack (and its values also vanished
    because it refers its own context 'this') and due to this
    objects created through 'createUser' doesn't have 'username'
  */
  //   setUsername(username);

  /*
    Above problem solution is using "call" method, that passes the
    current function context to nested function so that it holds
    reference of properties of nested function after its execution
    context removed from callstack.
    Basically, now nested function refers the context of the parent
    passed by 'call' instead of refering its own context.
  */
  setUsername.call(this, username);
}

const userOne = new createUser("dev", "dev@gmail.com", "123");
// console.log(userOne);

const userTwo = new createUser("devsiffy", "dev@google.com", "342");
// console.log(userTwo);
