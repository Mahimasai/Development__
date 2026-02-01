function SetUserName(userName) {
  //complex DB Caalls
  this.userName = userName;
}

function createUser(username, score, email, password) {
  //   SetUserName.call(username);
  SetUserName.call(this, username);
  this.score = score;
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", 25, "chai@fb.com", "123");
console.log(chai); //but the username is not assigned bro
//so did tht method set that preperty
//Because call waasnot made only refernce is done
//wew can explicitly call them but if we do that withoud this once the function is done then it willbe moved out from call stack so we have to give our own this so that we can store the value to our this
