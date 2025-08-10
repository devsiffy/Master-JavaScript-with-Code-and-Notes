// ----- fetch() tool with 'async/await' (using & handling)

// async function getUserInfo() {
//   try {
//     const response = await fetch("https://api.github.com/users/devsiffy");
//     const data = await response.json();
//     console.log("RESPONSE: ", data);
//   } catch (error) {
//     console.log("ERROR: ", error);
//   }
// }
// getUserInfo();

// ----- fetch() tool with 'then' and 'catch' (using & handling)

// fetch("https://api.github.com/users/devsiffy")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log("RESPONSE: ", data);
//   })
//   .catch(function (error) {
//     console.log("ERROR: ", error);
//   });
