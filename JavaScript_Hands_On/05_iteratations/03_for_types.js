//for of ===== used for objects

///[" "," "," "]
//[[],[],[]]
//[{},{},{}]

// for (const num of [1, 2, 3, 4, 5]) {
//   console.log(num);
// }

// const greetings = "Hello World";
// for (const greet of greetings) {
//   console.log(greet);
// }

//Maps
//inserion order of keys is preserved
//property of maps is that it stores the key value pairs
//coming to dupicity in keys
//maps do not allow dupicity in keys
//maps are iterable
// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("FR", "France");
// map.set("GER", "Germany");

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, value);
// } ///here maps are iteratable with of loop but objects are not
//we get output like this
// IN India
// USA United States of America
// FR France
// GER Germany

// const myObject = {
//   js: "javascript",
//   cpp: "c++",
//   rb: "ruby",
//   swift: "swift by apple",
// };

// for (const [key, value] of myObject) {
//   console.log(key);
// }   //It is not iteratable  of is not for objects like this

// const myObject2 = {
//     js : "javascript",
//     cpp : "c++",
//     rb : "ruby",
//     swift : "swift by apple"
// }

// for (const key in myObject2) {
//     console.log(key);
// }

// const programming = ["js", "rb", "py", "java"]

// for (const key in programming) {
//     console.log(key);
// }

//can we we use for in for arrays ? here in keys if we access we get arrays

//if we do for in for maps we get  nothing

//summary
// for of -> arrays, strings, maps
// for in -> objects, arrays
