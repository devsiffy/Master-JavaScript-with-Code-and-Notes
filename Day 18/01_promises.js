// ----- Promises (Basics)

// const promises = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Promise No. 1 (Basics)");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Promise Resolved..!");
// });

// ----- Promises (resolve with passing data)

// const promise_2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Promise No. 2 (resolve with passing data)");
//     resolve({ username: "devsiffy", email: "dev@google.com" });
//   }, 1000);
// }).then((data) => {
//   console.log("Promise Resolved with the data: ", data);
// });

// ----- Promises (reject & then chaining & finally)

// const promise_3 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Promise No. 3 (reject & then chaining & finally)");
//     const error = true;
//     // const error = false;
//     if (!error) {
//       resolve({ username: "devsiffy", email: "dev@google.com" });
//     } else {
//       reject("ERROR: Something went wrong..!");
//     }
//   }, 1000);
// });

// promise_3
//   .then(function (user) {
//     console.log("User Object: ", user);
//     return user.username;
//   })
//   .then(function (username) {
//     console.log("Username: ", username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("Promise is either resolved or rejected..!"));

// ----- Promise (handled using async/await)

// const promise_4 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Promise No. 4 (handled using async/await)");
//     // let error = false;
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "devsiffy",
//         email: "dev@google.com",
//       });
//     } else {
//       reject("ERROR: Something went wrong..!");
//     }
//   }, 1000);
// });

// async function promiseHandler() {
//   try {
//     const response = await promise_4;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// promiseHandler();
