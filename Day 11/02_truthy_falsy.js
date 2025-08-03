/*
    Types of Falsy Values;
    1) false
    2) 0
    3) -0
    4) 0n (biginit)
    5) ""
    6) null
    7) undefined
    8) NaN

    Other all values except falsy values are "truthy values".
    Some tricky truthy values are;
    1) "non-empty string"
    2) " "
    3) "0"
    4) "false"
    5) []
    6) {}
    7) function() {}
*/

/*
    Nullish Coalescing Operator ( ?? ): null / undefined
*/

// const val1 = 10 ?? 15;
// const val1 = null ?? 15;
// const val1 = undefined ?? 15;
// const val1 = 6 ?? 12 ?? 24;
// const val1 = null ?? 12 ?? 18;
// const val1 = null ?? undefined;
const val1 = null ?? undefined ?? 5;

// console.log(val1);

/*
    Ternary Operator:- A short-form of if-else
    Syntax:
    condition ? true : false;
*/

const price = 100;

// price < 50
//   ? console.log("price is equal to 100")
//   : console.log("price is not greater than 100");
