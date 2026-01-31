const userEmail = "sai@gmail";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

//no truee of fasle used here

//if empty string is given it is false
//if non empty string is given it is true
//if 0 is given it is false
//if non zero is given it is true
//if null is given it is false
//if undefined is given it is false
//if [] is given it is true
//if {} is given it is true s

//falsy values are
//false
//0
//-0
//""
//null
//undefined
//NaN
//BigInt

//truthy values are
//function(){},{},[]," "

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

//false == 0 -> true
//false == "" -> true
//0 == "" -> false

// && -> AND
// || -> OR
// ! -> NOT

//Nullish Coalescing Operator (??)

let val1;
//val1 = 5 ?? 10  //5
//val1 = null ?? 10 //10
//val1 = undefined ?? 10 ?? 20 //10

// console.log(val1);

//Ternary Operator
//condition ? true : false

const age = 20;
age >= 18 ? console.log("Adult") : console.log("Minor");
