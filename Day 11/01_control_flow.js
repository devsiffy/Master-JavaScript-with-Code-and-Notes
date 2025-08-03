/*
    Assignment Operator:-
    1. Less than ( > )
    2. Greater than ( < )
    3. Less than equal to ( >= )
    4. Greater than equal to ( <= )
    5. Equality ( == )
    6. Not-equal to ( != )
    7. Strict Equality ( === )
    8. Strict In-equality ( !== )
*/

/*
    if-else statement:-
    It execute on the basis of some condition, if condition becomes "true" then if-block execute otherwise in-case of false condition else-block execute.
*/

const isUserLoggedIn = true;

// # we can write only if-block

// if (isUserLoggedIn) {
//   console.log("If-block statement");
// }

// # if-block for true condition, else-block for false condition

// if (isUserLoggedIn) {
//   console.log("If-block statement");
// } else {
//   console.log("else-block statement");
// }

// if (!isUserLoggedIn) {
//   console.log("If-block statement");
// } else {
//   console.log("else-block statement");
// }

/*
    NOTE:-
    In JavaScript, the exclamation mark (!) is the logical NOT operator. It is used to invert the value.

    => Normal Use
    !true → false
    !false → true
    !0 → true (because 0 is falsy)
    !1 → false (because 1 is truthy)
    !"" → true (empty string is falsy)
    !"hello" → false (non-empty string is truthy)

    => Double NOT (!!)
    You'll often see it used twice: !!value
    This is a common trick to coerce any value into a boolean:
    !!"hello" → true
    !!0 → false
    !!undefined → false
*/

// # if with implicit scope (bad practice)

// if (isUserLoggedIn) console.log("User is logged In..!");

// if (isUserLoggedIn)
//   console.log("User is logged In..!"), console.log("say hello");

// # to check multiple conditions

const balance = 1000;

// if (balance < 500) {
//   console.log("Balance is less than 500");
// } else if (balance < 750) {
//   console.log("Balance is less than 750");
// } else if (balance < 900) {
//   console.log("Balance is less than 900");
// } else {
//   console.log("Balance is less than 1200");
// }

/*
    Logical Operators:-
    AND -> &&
    OR  -> ||
    NOT -> ! (already discuss above)
*/

const isUser = true;
const loggedIn = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;

// if (isUser && loggedIn) {
//   console.log("User is logged-in..!");
// }

// if (loggedInFromEmail || loggedInFromGoogle) {
//   console.log("Allow access the user.");
// }

/*
    Switch Statement:-
    The switch statement in JavaScript is a type of conditional statement used to compare a single value against multiple possible values (cases).
*/

// const month = 1;
// const month = 3;
const month = 8;

// switch (month) {
//   case 1:
//     console.log("Januray");
//     break;
//   case 2:
//     console.log("Febrary");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;

//   default:
//     console.log("default match case");
//     break;
// }
