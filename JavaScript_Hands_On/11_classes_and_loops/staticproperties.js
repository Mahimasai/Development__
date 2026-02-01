class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username is ${this.username}`);
  }
  static createId() {
    //nott accessible by inherited by classes also
    //we use static so that this method is not available for all the instances from this class
    return `123`;
  }
}

const hitesh = new User("hitesh");
console.log(hitesh.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "jik@exp.com");
iphone.logMe();

const chai = new Teacher("chai", "chai@fb.com");
chai.logMe();
console.log(chai.createId()); //error
