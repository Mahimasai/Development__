// const tinderUser = new Object(); Its a singleton Object
// const tinderUser = {}; // Object Literal Syntax

const tinderUser = {};
tinderUser.name = "John Doe";
tinderUser.age = 28;
tinderUser.isActive = true;

// console.log(tinderUser);

//Objets in object

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Saima",
      lastname: "Khan",
    },
  },
};
// console.log(regularUser.fullname);

//Objeccts assign
//  merging of objects and returns a target object
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = { obj1, obj2 };
// console.log(obj3);It is likke object inside object

const obj4 = Object.assign({}, obj1, obj2); //Here {} is target and the rest all are sources and the sources go into the target object

//Or Spread Operator best to use
const obj5 = { ...obj1, ...obj2 }; //Spread

// console.log(obj5);

const users = [
  //Array of objects
  {
    id: 1,
    email: "saima@gmail.com",
  },
  {
    id: 2,
    email: "saima@gmail.com",
  },
  {
    id: 3,
    email: "saima@gmail.com",
  },
];

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //Here the Output is the array of the Objects
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser)); //Here the reach key value pair is and element in an array

console.log(tinderUser.hasOwnProperty("name")); //Here it checks if the object has the property
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
