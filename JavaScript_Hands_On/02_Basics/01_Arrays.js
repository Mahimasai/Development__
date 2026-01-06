//array
const myArray = [1, 2, 3, 4, 5]; //the elements can be of any datatypes and mix

//Javascript arrays are resizable   --property 1
//We can not access the elements by string we follow index
console.log(myArray[0]);

//JavaScriopt copy creates an shallow copy
//here array object creates shallow copy
// Shallow copy same reference point so the change any of the original or the copy creates the chnage in the whole

//

const myHeroes = ["thor", "spiderman", "ironman"];

const arr = new Array(1, 2, 3, 4, 5);

//array methods

myArray.push(6); //add element at the end
myArray.pop(); //remove element from the end

myArray.unshift(9); //add element at the start
myArray.shift(); //remove element from the start

//Questioner methods

console.log(myArray.includes(9));
console.log(myArray.indexOf(9)); //if 9 exists then it returns the index else -1

const newArray = myArray.join(); //Adds all the elemnet into the string
console.log(myArray); //outputs [1,2,3,4,5]
console.log(newArray); //1,2,3,4,5
console.log(typeof newArray); //string

//Slice and Splice
//const myArray = [1, 2, 3, 4, 5];
console.log("A", myArray);

const myn1 = myArray.slice(1, 3);

console.log(myn1); //outputs [2,3]
console.log("B", myArray); //outputs [1,2,3,4,5]

const my2 = myArray.splice(1, 3);

console.log(my2); //outputs [2,3,4]
console.log("C", myArray); //outputs [1,5]
///Concengrates here Slice will not manipulate the original array here in the range the last index is not included
//But in the splice it will manipulate the original array example here (1,3) from index starting from the 1 it will deleete the elements and returns that array it can be understood as ( x,y ) from x index it will delte y elements from the original array and returns that array
