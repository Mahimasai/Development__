const user = {
  username: "saam",
  price: 199,
  welcomeMessage: function () {
    console.log(`Welcome to website ${this.username}`);
    console.log(this);
  },
};

// user.welcomeMessage(); //Here it will print saam
// user.username = "SAM";
// user.welcomeMessage(); //Here it will print SAM
// //Here we used this keyword for the current context so as the current context is changed the value of useername is also changed

// console.log(this); //Here we get empty brackets

//In the browser we get Window Object

// function chai() {
//   console.log(this);
//   const username = "One";
//   console.log(this.username); //Here we are getting undefined
//Same result we get for functiion assigned to a variable
// }
// chai();
// //So this works for the Object but not for the function

//Arrow Function

const chai = () => {
  let username = "saam";
  console.log(this);
  console.log(this.username);
};
chai();
