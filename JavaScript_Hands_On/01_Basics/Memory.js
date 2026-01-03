//Stack and Heap

//Primitive the 7 types : Stack
//Non-Primitive the : Heap

let name = "saima";
let another = name;

another = "hihihihihi";
console.log(name);
console.log(another);

//non-primitive the : Heap
let userOne = {
  email: "saima@123",
  upi: "saima@123",
};

let userTwo = userOne; //here userTwo refers to the userOne
userTwo.email = "saima@123456";
console.log(userOne.email);
console.log(userTwo.email);
userTwo.email = "fafaf@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
//Here we can see that the userOne and userTwo are referring to the same memory location
