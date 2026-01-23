//When you don't know the number of arguments

function calculateCartPrice(...num3) {
  return num3;
}
console.log(calculateCartPrice(200, 400, 500, 2000)); //here we get array

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000)); //returns [500,2000 ]

const user = {
  username: "hitesh",
  price: 199,
};
function handleObject(anyobject) {
  console.log(
    `Usrname is ${anyobject.username} and price is ${anyobject.price} `
  );
}
//The type creates a problem here
// handleObject(user);
handleObject({
  username: "saam",
  price: 199,
});

const myNewArray = [200, 400, 500, 2000];
function returnSecondValue(getarry) {
  return getarry[1];
}
// console.log(returnSecondValue(myNewArray));

//function scope
//Here the Declaration also matters

// console.log(addTwoNumbers(2, 3));

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// } //Here we will not get error

//But we get eroor

console.log(addTwoNumbers(2, 3));

const addTwoNumbers = function (num1, num2) {
  return num1 + num2;
}; //Here we will get error  as it says I cannot access addTwoNumber
//Here we get a concept called Hosting in JavaScript
