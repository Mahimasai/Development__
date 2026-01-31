function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
//function is an object
//everything in javascriot is an object

//end of the day everything  is an object
//javascript is a prototype based language and never looses to go beyond so it goes on till object and object prototype is null

function CreateUser(username, score) {
  this.username = username; //see here this is the new object
  this.score = score;
}
//we can create our own functions

CreateUser.prototype.increment = function () {
  this.score++;
};

CreateUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};

//without new keryword we get error because actions gets added when the new is used

const user1 = new CreateUser("hitesh", 25);
const user2 = new CreateUser("saima", 25);

user1.printMe();
user2.printMe();
