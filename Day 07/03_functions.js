// ----- normal function

function greet() {
  console.log("Say, hello..!");
}

// greet();

// ----- function with return keyword

function add(num1, num2) {
  return num1 + num2;
}

const result = add(5, 2);
// console.log("Result: ", result);

// ----- function with if statement

function userLoginMsg(username) {
  if (!username) {
    console.log("Please enter your username");
    return;
  }
  return `hey @${username} ! welcome back`;
}

// console.log(userLoginMsg("devsiffy"));
// console.log(userLoginMsg());

// ----- function with default values

function sayName(name = "M Umair") {
  console.log(`Hi ${name}!`);
}

// sayName();
// sayName("Ali");
