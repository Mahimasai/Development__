//More Methods in Arrays

const arr = [1, 2, 3, 4];

const marvel_heroes = ["thor", "spiderman", "ironman"];
const dc_heroes = ["superman", "flash", "batman"];

marvel_heroes.push(dc_heroes); //outputs [ 'thor', 'spiderman', 'ironman', [ 'superman', 'flash', 'batman' ] ]
//Here the array is added as a single element

//Here we have to access items as 2d array and here it is not a preferable method
//we can create a concat methos

console.log(marvel_heroes.concat(dc_heroes)); //outputs [ 'thor', 'spiderman', 'ironman', 'superman', 'flash', 'batman' ]

//Here concat method returns the new array

const all_arrays = marvel_heroes.concat(dc_heroes);
console.log(all_arrays);

//Here we can use spread operator

const all_new_heroes = [...marvel_heroes, ...dc_heroes]; //spread each  glass take it and spread

console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5, 6]]];
//Many brackets right

const usable_another_array = another_array.flat(Infinity); //Here we can use flat method to remove the brackets //Instead of Infinity we can use the number of brackets which means till what depoth should  I remove the brackets

console.log(usable_another_array);

Array.isArray(usable_another_array); //Here we can use isArray method to check if the array is an array
console.log(Array.isArray("saima")); //Beca
//We can cinvert the string into array
console.log(Array.from("saima"));

console.log(Array.isArray(Array.from("saima")));
console.log(Array.isArray(Array.from({ name: "saima" }))); //Here we get empty array because we are not using the spread operator and if
//Array cannot create Array then it will create an empty array
//We can make array of keys and values of an object

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
//Array.of method creates an array from the given arguments
