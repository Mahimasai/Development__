class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`course added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@fb.com", "123");
chai.logMe();
chai.addCourse();

const maslaChai = new User("masalachai");
maslaChai.addCourse(); //error
maslaChai.logMe(); //works

console.log(masalaChai == Teacher);
console.log(masalaChai instanceof Teacher);
