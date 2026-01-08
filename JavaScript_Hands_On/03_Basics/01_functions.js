function sayMyName() {
  console.log("Saima");
} //Function definition

// sayMyName(); //Function call

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// addTwoNumbers()//NaN
// addTwoNumbers(5, 7);
// addTwoNumbers(5, "7"); //57
// addTwoNumbers(5, "a"); //5a
// addTwoNumbers(5, null); //5
// addTwoNumbers(5, undefined); //NaN

// const result = addTwoNumbers(5, 7);
// console.log("Result: ", result);//Here result is undefined

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result; //After return the function stops and nothing after that executes
}

const result = addTwoNumbers(5, 7);
// console.log("Result: ", result);

function loginUserMessage(userName = "default user") {
  if (userName === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${userName} just logged in`; //String Interpolation
}
console.log(loginUserMessage("Helix"));
// console.log(loginUserMessage());
