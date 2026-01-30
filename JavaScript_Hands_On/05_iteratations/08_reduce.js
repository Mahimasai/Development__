const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, curr) {
//   console.log(`acc: ${acc}, curr: ${curr}`);
//   return acc + curr;
// }, 3);

//here 3 is the initial value
// console.log(myTotal);

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal);

const ShoppingCart = [
  { productId: 1, productName: "Mobile", price: 12000 },
  { productId: 2, productName: "Laptop", price: 22000 },
  { productId: 3, productName: "Tablet", price: 15000 },
];

const total = ShoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(total);
