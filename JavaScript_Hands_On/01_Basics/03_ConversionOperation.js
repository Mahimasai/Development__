//Here we are learning about the type conversions
//so okay we started with assigning 33 as a number and printing its values and its type
//but now we are assigining "33" as a string and printing its values and its type
//now we are assigning "33abc" as a string and printing its values and its type
//so here we are using Number() and also it is giving NaN that means we can't relly find this vaigue conversion of letters to numbers so we have to be careful while using it

// let score = "33abc";

// console.log(typeof score);

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); //Here we get NaN
// let Score = null;
// let Cnv = Number(Score);
// console.log(Cnv); //Here after conversion we got zero

// let ScoreUn = undefined;
// let cnvUn = Number(ScoreUn);
// console.log(cnvUn); //Here after conversion we got NaN

// let boScore = true;
// let cnvBoscore = Number(boScore);
// console.log(cnvBoscore); //Here after conversion we got 1

//Notes
//"33" ==> 33
//"33ABC" ==> NaN
//true ==> 1
//false ==> 0
//null ==> 0
//undefined ==> NaN

//Boolean Convesion

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// //Empty String

// let emptyString = "";
// let booleanEmptyString = Boolean(emptyString);
// console.log(booleanEmptyString);

// let nameStr = "Saima";
// let booleanNameStr = Boolean(nameStr);
// console.log(booleanNameStr);

//""=> false
//"saima"=> true
//1=> true
//0=> false
//null=> false
//undefined=> false

//String Conversion

// let someNumber = 33;

// let StringNumber = String(someNumber);
// console.log(StringNumber);
// console.log(typeof StringNumber);

// let weirdo = null;
// let StringWeirdo = String(weirdo);
// console.log(StringWeirdo);
// console.log(typeof StringWeirdo);

//  NOW WE WILL SUMMARIZE THE CONVERSIONS WE LEARNT TILL NO

//NUMBER CONVERSION
//"33"=>33
//"33ABC"=>NaN
//null => 0
//undefined => NaN
//true => 1
//false => 0

//Boolean Conversions
//1 => true
//0 => false
//""=>false
//"sfh"=>true
//null=> false
//undefined=> false

//String Conversions
//33=> "33"
//33=> "33"
//null=> "null"
//undefined=> "undefined"
//true=> "true"
//false=> "false"

//-------------- Operations -------------------

let value = 3;
let negValue = -value;
console.log(negValue);
console.log(typeof negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);
// console.log(2 ** 2);

// let str1 = "Hello";
// let str2 = "Saima";
// console.log(str1 + str2); //Here they get  concatenated
// console.log(str1 - str2); //Here we get NaN

//See this werid things here which is interesting
//See in ECMA Script docs

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

//Here we will discuss something we will just understand the pattern that once the string is there then it will consider the whole thing as string
//It then the normal arithmetic operations

// console.log( 3 + 4 * 5 % 3 );
//use paranthesis to make it clear
console.log(((3 + 4) * 5) % 3);

//Assignment operators

//Better avoid using this for better code readability
// console.log(+true); //output is 1
// console.log(-true); //output is 1
// console.log(+"2"); //output is   2
// console.log(-"2"); //output is -2
// num1 = num2 = num3 = 2 + 2  //Assignment operators

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

//prefix and postfix

//first increment then assignment is prefix
//first assignment then increment is postfix
//example
let gameCounter1 = 100;
gameCounter1++;
console.log(gameCounter1);

let gameCounter2 = 100;
++gameCounter2;
console.log(gameCounter2);
