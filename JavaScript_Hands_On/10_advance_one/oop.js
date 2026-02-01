//object collections of object and properties
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log("user details");
    console.log(this.username);
  },
};

console.log(user.username);
console.log(user.getUserDetails);

//this keyword normally gives {}

function User(username, login, isloggedIn) {
  this.username = username;
  this.login = login;
  this.isloggedIn = isloggedIn;
  return this; //eventhough twithout this this works
}

const user1 = User("saima", 123, true);
const user2 = User("hitesh", 123, true);
console.log(user2);
//here the values are overwritten

//so we use constructor function

//we uswe
const userone = new User("saima", 123, true);
const usertwo = new User("hitesh", 123, true);
console.log(userone);
console.log(usertwo);
