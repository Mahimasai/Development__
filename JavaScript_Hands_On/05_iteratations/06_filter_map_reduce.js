// const coding = ["js", "rb", "py", "java"];

// const values = coding.forEach((item) => {
//   //   console.log(item);
//   return item;
// });

// console.log(values); //undefined nothing is returned here btw

// js
// rb
// py
// java
// undefined
//why did wew get undefine?

//But we wanna get a returened value right
//so we have
//filter will return  a values
// const myNums = [1, 2, 3];

// // // const nums = myNums.filter((num) => num > 2);
// // // console.log(nums); here value is returened but remenber ()=>{num > 2 } willl not retrun because a new scope is addeed s0 just num > 2  or (num > 2 ) or ({encolede anything in closed brackets })

// //instead of using filter we can use foreach here but filter is simple to use

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 2) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

const Books = [
  { bookname: "js", price: 200 },
  { bookname: "rb", price: 300 },
  { bookname: "py", price: 400 },
  { bookname: "java", price: 500 },
];

const less_price_books = Books.filter((book) => book.price < 400);
console.log(less_price_books);

//WE GET ERROR IDENTIFY WHY --------------------//THINK//-----------------------------------
// const books_j = Books.filter((book)=> {book.bookname === "js"  })
// console.log(books_j);
