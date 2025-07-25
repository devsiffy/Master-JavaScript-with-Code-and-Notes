/*
    Different ways to define the variables;
    'let' is a keyword and a part of modern JS
    'var' is a keyword but very old way to define variables (not recommended)
    'const' is a keyword used to define constants - whose values can't be changed
*/

let username = "devsiffy";
var name = "m umair";
const dev = "interested";
accountId = "001"; // we can also define variable like this but very bad practice

/*
    Different ways to print the output;
    1. console.log()
    2. console.table()
*/

// console.log(username);
// console.log(name);

// console.table([username, name, dev, accountId]);
console.table({ username, name, dev, accountId });
