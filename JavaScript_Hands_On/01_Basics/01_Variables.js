const accountId = 144986565
let accountEmail = "saima@123"
var accountPassword = "123456"
accountCity = "Hyderabad"

let accountState; //Declaration


// accountId = 2 //Not allowed to change const

console.log(accountId)

accountEmail = "saima@123.hccc.com"
accountPassword = "5454634756"
accountCity = "Bangalore"

// console.log(accountEmail)
// console.log(accountPassword)
// console.log(accountCity)
//Instead of above 3 lines we can use console.table

//Here the accountState is undefined because we have only declared it but not initialized it
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//But you saw that let and var are almost same
//Earlier JavaScript only had var keyword to declare variables
//It created a huge problem in scope where the scope problem was not defined
//So to resolve this issue, let and const keywords were introduced
//There is only one difference between the let and var that is scope
//Scope of var is function scope
//Scope of let is block scope

/*
Prefer not to use var because of issue in block scope and functional scope 

*/

