//AAfter ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
// }

// const chai = new User("chai", "chai@fb.com", "123");
// console.log(chai.encryptPassword());

//behind the scene

function User(username, email, password) {
  Setemail(this, email); //create Setemail function yourself
  this.username = username;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`; //hee in prototype we added a method
};
