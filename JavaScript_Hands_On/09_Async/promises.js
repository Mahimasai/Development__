// //we apply them for the asynchronous functions

// const promiseOne = new Promise(function (resolve, reject) {
//   //Do an async task
//   //DB Calls, Crypto

//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// //or directly use .then

// const promise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Task 2 completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("proceeded after promise 2");
// });
// //When promises wherer not introduced we havd Q or BlueBird

// const promise3 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "chai", email: "chai@example.com" });
//   }, 1000);
// });

// promise3.then(function (user) {
//   console.log(user);
// });

// const promise4 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "chai", email: "chai@example.com" });
//     } else {
//       reject("Something went wrong");
//     }
//   }, 1000);
// });

// //we cannot store the data innto the variable so we can create nestedd then
// promise4
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise is either resolved or rejected");
//   });
// //finally is always executed

// const promise5 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Java Script", email: "chai@eple.com" });
//     } else {
//       reject("ERROR:JS WENT WRONG ");
//     }
//   }, 1000);
// });

// //instead of then we can use asyn and await

// async function consumePromise5() {
//   try {
//     const Response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

//Async
