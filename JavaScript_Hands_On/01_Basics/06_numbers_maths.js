const score = 400;

const balance = new Number(100);

console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length());

console.log(balance.toFixed(2)); ///Here we set the precesion

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); //here output will be 23.9
//I will try to explain this ina simple manner
//Here we set the precision to 3 so it will show 3 digits after the decimal point and after the prescision count it will round of
//more examples like 1234.6875 and precision is 4 then 1235
//but if the precision is 3 then 12 reest it will be considering as exponential so be careful while using the Precision

const hundereds = 10000000;

console.log(hundereds.toLocaleString("en-IN")); //outputs 1,00,00,000

//for currecy we can use this

//for max and min values
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE); //We can prefer to use this in our Data Structures

//_________-Mathematics-___________\\

/*
      _______
    /         \
   |  O     O  |
   |     ^     |
   |   \___/   |
    \_________/
*/

console.log(Math); // WE HAVE MANY PROPERTIES AND METHODS IN MATH

//it makes our code more readable and easy to implement

console.log(Math.abs(-7)); //Outputs only positive value

console.log(Math.round(4.6)); //Outputs nearest integer   5
console.log(Math.round(4.4)); //Outputs nearest integer   4

console.log(Math.ceil(4.6)); //Outputs nearest integer   5
console.log(Math.ceil(4.4)); //Outputs nearest integer   5 // Ceil Says  choose the Top value

console.log(Math.floor(4.6)); //Outputs nearest integer   4
console.log(Math.floor(4.4)); //Outputs nearest integer   4
//Floor Says choose the Bottom value

console.log(Math.min(4, 6, 8, 1, 3)); //returns min value
console.log(Math.max(4, 6, 8, 1, 3)); //returns max value
//Here comes randomn value
console.log(Math.random()); //Here outputs btw 0 to 1

//We can change the range of the output by usinf the functions range concept it is simple if it is confusing then try to browse its fine
//I will try to explain this in a simple manner
// (0 , 1) * 10 ==> (0 , 10) gets values btw 0 to 9
//((0 , 1) + 1) * 10 ==> (0 , 11) gets values btw 1 to 11 so 0.0003 like small values are not included
//formula
const min = 10;
const max = 20;

// (Math.random() * (max - min + 1) + min) this is the formulae

//Math.floor(formula) + min //Here we are genetating the values that we wanna add tho the minimum

//minimum fixed number + changing Number (because of the Math.floor(formula))
