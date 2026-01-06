const name = "sai-mahima";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf("t"));

newString = gameName.substring(0, 4); //Last not included negative values are not allowed

console.log(newString);

const anotherString = gameName.slice(-8, 4); //Last not included and also in slice you can use negative values

console.log(anotherString);

const newString1 = "     sai mahima      "; // here we have extra unnecessary charracterrs

console.log(newString1);
console.log(newString1.trim()); // trim function removes extra spaces from starting and ending

const url = "https://saima.com/mahima%20saima"; //here spaces are %20

console.log(url.replace("%20", "-"));

url.includes("saima"); //Does this string have this substring

url.includes("maho");

//I wanna conver the string into arrays based on the certain parameters

console.log(url.split("/")); // It outputs the array as ["https:", "saima.com", "mahima%20saima"]

//we wll use methods majorly in frontend and backend

//There are many methods if we wanna knoow more then go to console and then type any string and enter then type . and enter then you will see all the methods
