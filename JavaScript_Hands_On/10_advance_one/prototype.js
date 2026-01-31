// //refer video 43 https://www.youtube.com/watch?v=uMI5cNeHTOc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=43

// let myName = "hitesh";

// console.log(myName.length);
// //IF I NEED TO CREATE AN METHOD

// let heroPower = {
//   thor: "hammer",
//   spiderman: "web",

//   getSpiderPower: function () {
//     console.log(`spiderman power is ${this.spiderman}`);
//   },
// };

// Object.prototype.hitesh = function () {
//   console.log("hitesh is present in all objects");
// };

// heroPower.hitesh();

// Array.prototype.heyHitesh = function () {
//   console.log("hitesh is present in all arrays");
// };

// heroPower.heyHitesh(); //it doesn't have the access

const Teacher = {
  makeVideo: true,
  editVideo: true,
};

const TeachingSupport = {
  isAssistant: true,
};

const TASupport = {
  makeAssignment: "Js assignment",
  fullTime: true,
  __proto__: TeachingSupport, //TASupport has access to the Teaching Assistent
};
//If we wanna link the objects

//modernSyntax
Object.setPrototypeOf(TeachingSupport, Teacher); //Ts takes the Teacher as its prototype

//Now truelength

String.prototype.truelen = function () {
  console.log(`${this}`);
  console.log(`true length is ${this.trim().length}`);
};
//this is the string
"hitesh ".truelen();
"iceTea ".truelen(); //this prints the name

//Here we added the function by ourselves
