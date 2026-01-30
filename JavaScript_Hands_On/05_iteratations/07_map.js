const Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = Num.map((num) => num * 2);

// console.log(newNums);

//
// const FR_Nums = [];
// Num.forEach((num)=> FR_Nums.push(num*2))

//Best and simple way with logic

const newNums = Num.map((num) => num * 2)
  .map((num) => num + 1)
  .filter((num) => num > 10);
console.log(newNums);
