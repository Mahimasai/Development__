//Primitives
//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
//Means that the values are changed in the copy the origial is not changed

const score = 100;
const scoreValue = 100.3;
//javascript is dynamic typing

//in typescript the brother of javascript is there  there we have to determine the type of the variable

const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;

//even though the value is same the id's are different

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); //false

const bigNumber = 2876268278n; //n is used to define BigInt
console.log(bigNumber);
console.log(typeof bigNumber);

//Reference Type (Non- Primitive )

//Array, Objects, Functions

const names = ["hanuman", "krishna", "vishnu"];
console.log(names);
//objects

const JsUser = {
  name: "Saima",
  age: 18,
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

const myFunctin = function () {
  console.log("Hello");
};

console.log(myFunctin);
console.log(typeof myFunctin);
console.log(typeof JsUser);

//Undefined==>undefined
//null==>object
//function==>function
//array==>object
//object==>object
//symbol==>symbol
//bigint==>bigint
//string==>string
//number==>number
//boolean==>boolean
