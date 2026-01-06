//  Ojbects

//singleton
//literals

//Singleton //creates an object using new keyword

//Object.create() //creates an object using object

//by literals no singleton

Object.create(); //creates an object using object , singleton
const JsUser = {
  name: "Saima",
  age: 18,
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
  qualification: "Btech",
};
//Here keys and values can be determined
//here keys are preferred as string
console.log(JsUser.name); //Lesser prferable
console.log(JsUser["name"]); //Preferable

//here we cannot access as the Juser.qualification because it is a string
//we have to do it by the SQUARE BRACKETS

const Sym = new Symbol("key1");
//we cannot assign the symbol as keys normally

// const Jsuser2 = {
//   name: "Saima",
//   age: 18,
//   isLoggedIn: false,
//   lastLoginDays: ["Monday", "Tuesday"],
//   qualification: "Btech",
//   Sym: "key1",
// };
//Juser2.mySym = "key1"; it gives but the ,  Sym is of type String
//So we write as
const Jsuser2 = {
  name: "Saima",
  age: 18,
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
  qualification: "Btech",
  [Sym]: "key1",
};
console.log(JsUser2[Sym]); //This method is used to access the symbol

JsUser2.email = "saima@123.com";
console.log(JsUser2); //Here we added the email property to the object
JsUser2.name = "Secod Name "; //Here we changed the name property

//Here we can lock the values of the object

Object.freeze(JsUser2); //Here we locked the values of the object
//So we can not change the values of the object JsUser2

//We can add Functions

JsUser.greeting = function () {
  console.log(`Hello JS User , ${this.name}`);
}; //Here this keyword refers to the object

console.log(JsUser.greeting()); //here we get undefined because we have not returned the value
//Here just the greeting is printed
// JsUser.greeting is not a function yet
//Greeting 2
