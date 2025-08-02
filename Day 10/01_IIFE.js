/*
    IIFE stands for "Immediately Invoked Function Expression".
    It's a function that runs as soon as it is defined.
    Why use an IIFE?
    -> Avoid polluting the global scope
    -> Create a private scope
    -> For 'initialization code' that runs once e.g., DB connections
*/

(function hello() {
  console.log("IIFE for regular function");
})();

(() => {
  console.log("IIFE for arrow funtion");
})();

((username) => {
  console.log(`${username}`);
  console.log("IIFE with params");
})("devsiffy");

/*
    NOTE:- 
    -> "function definition" must wrap in paranthesis
    -> It must end with a semi-colon
    (function definition)();
*/
