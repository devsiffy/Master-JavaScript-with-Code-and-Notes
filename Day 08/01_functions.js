// ------ Functions with Spread as Parameter

function getNumbers(...nums) {
  console.log(nums);
}

// getNumbers(1, 2, 3, 4, 5);

// ------ Functions with Values & Spread as Parameter

function getNums(num1, num2, ...nums) {
  console.log(num1, num2, nums);
}

// getNums(12, 34, 2, 3, 5, 6);

// ------ Functions with Object as Parameter

const obj = {
  username: "UnknownIP",
  email: "unknown@gmail.com",
};

function getObjInfo(obj) {
  console.log(`Hi ${obj.username}! Is this your email ${obj.email}`);
}

// getObjInfo(obj);

// ------ Functions with Array as Parameter

const arr = ["UnknownIP", "unknown@gmail.com"];

function getArrInfo(arrData) {
  console.log("Username: ", arrData[0]);
  console.log("Email: ", arrData[1]);
}

// getArrInfo(arr);
