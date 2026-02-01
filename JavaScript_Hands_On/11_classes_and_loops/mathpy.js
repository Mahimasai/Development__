const Descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(Descripter);
// //{
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// } we get this

//now we can change the value of PI

// const mynewObject = Object.create()

//or

const chai = {
  name: "ginger chai ",
  prince: 258,
  isAvailable: true,

  oderchai: function () {
    console.log("chai nahi bani ");
  },
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
//   value: 'ginger chai ',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

//we can cchane the property

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//object isome times is not iteratable so we can use entries
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    ///now functions are not iterated but the if name n define property has enumerakle falsse then name is not iterate  else if it is true ut is terated
    console.log(`${key} : ${value}`);
  }
}
