// ***** Basic Comparisons *****

// console.log("8 > 5 => ", 8 > 5);
// console.log("8 < 5 => ", 8 < 5);
// console.log("5 >= 5 => ", 5 >= 5);
// console.log("6 <= 5 => ", 6 <= 5);
// console.log("6 == 5 => ", 6 == 5);
// console.log("6 != 5 => ", 6 != 5);

// ***** Tricky Comparisons *****

// console.log("2" > 1);
// console.log("02" > 1);

/*
    NOTE (for above);
    In JavaScript, when you use comparison operators like >, it tries to convert the values to the same type before comparing. In both, the string values "2" and "02" are automatically converted to numbers. So "2" becomes 2, and "02" becomes 2 as well. Then it compares 2 > 1, which is true in both cases, so both lines print true.
*/

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(null == undefined);

/*
    NOTE (for above);
    In JavaScript, == treats null in a special way — it only equals undefined, not numbers like 0. That's why null == 0 is false. But with >, <, or >=, JavaScript tries to turn null into a number first (which becomes 0), then does the comparison. So null >= 0 becomes 0 >= 0, which is true.
*/

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

/*
    NOTE (for above);
    JavaScript can't turn undefined into a number properly—it becomes NaN (not a number). So when you do undefined > 0 or undefined >= 0, it's like comparing NaN > 0, which is false. And undefined == 0 is also false because undefined is only equal to null, not 0.
*/

// ***** Strict Equality *****

// console.log("2" == 2);
// console.log("2" === 2);
// console.log(true == 1);
// console.log(true === 1);

/*
    NOTE (for above);
    "2" == 2 is true because == converts the string "2" to number 2 before comparing.
    "2" === 2 is false because they have different types (string vs number).
    true == 1 is true because true becomes 1 when using ==.
    true === 1 is false because their types are different (boolean vs number).
*/

console.log("3" != 3);
console.log("3" !== 3);
console.log(true != 1);
console.log(true !== 1);

/*
    NOTE (for above);
    "3" != 3 is false because "3" converts to 3, so they are equal.
    "3" !== 3 is true because their types are different (string vs number).
    true != 1 is false because true converts to 1, so they are equal.
    true !== 1 is true because types differ (boolean vs number).
*/
