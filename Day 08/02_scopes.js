// ------ 'var' (Global Scope)

var globalVar = "I'm global";

if (true) {
  var globalVar = "Still accessible outside this block";
  // console.log(globalVar);
}

// console.log(globalVar); // Outputs: Still accessible outside this block

// ------ 'let' (Global & Block Scope)

let globalLet = "Global let";

if (true) {
  // console.log(globalLet); // Accessible
  let blockLet = "Only in this block";
  // console.log(blockLet); // Accessible here
}

// console.log(blockLet); // Error: blockLet is not defined

// ------ 'const' (Global & Block Scope)

const globalConst = "Global const";

if (true) {
  // console.log(globalConst); // Accessible
  const blockConst = "Block const";
  // console.log(blockConst); // Accessible here
}

// console.log(blockConst); // Error: blockConst is not defined
