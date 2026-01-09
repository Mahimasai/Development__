//let,var,const

var c = 300;
const b = 300;
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
//   console.log("Inner ", a);
//   console.log("Inner ", b);
//   console.log("Inner ", c);
}

// console.log(a); //here a is 300
// console.log(b); //here b is 300
// console.log(c); //here var is 30 not 300

//When ever a var is used it is created in the global scope

const myNewArray = [200, 400, 500, 2000];
for (let i = 0; i < myNewArray.length; i++) {
  const element = myNewArray[i];
//   console.log(element);
}

//nested scope

function one() {
  const username = "saam";

  function two() {
    const website = "youtube";
    // console.log(username);
  }
  //   console.log(website); //website is not defined
  two();
}

one();
