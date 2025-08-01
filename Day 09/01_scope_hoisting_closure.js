/*
    In below code, very basic knowledge about "CLOSURE" which is basically when inner function can access the outer variables.
    e.g., in below code, 'two()' access the 'username'
    Note:- Closure happens because of lexical scope
*/

function one() {
  const username = "devsiffy";
  function two() {
    const website = "github";
    console.log(username); // has access to 'name' because of lexical scope
  }
  //   console.log(website);
  two();
}

// one();

// ----- Block level Scope

if (true) {
  const username = "devsiffy";
  if (username === "devsiffy") {
    const website = " github";
    console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

/*
    HOISTING : It is JavaScript's default behavior of moving declarations (not initializations) to the top of their scope during the compile phase.
    Its different phases are;
    -> "function declaration" is fully hoisted, so you can call it before its definition.
    -> "function expression" with 'let' or 'const' is not accessible before definition — ReferenceError.
    -> "function expression" with 'var' is hoisted as undefined — calling it before assignment gives a TypeError.
*/

// --- Regular function declaration

// addOne(2); // Works fine

function addOne(num) {
  return num + 1;
}

// --- Function expression (same for 'let' and 'const')

// addTwo(1); // Reference Error: Cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 2;
};

// --- Function expression (for 'var')

// addThree(2); // TypeError: addThree is not a function

var addThree = function (num) {
  return num + 3;
};
