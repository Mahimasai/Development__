let i = 0;
while (i < 3) {
  console.log(`while loop its value is ${i}`);
  i++;
}

//array with while

let arr = [1, 2, 3, 4, 5];
let j = 0;
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

let score = 11;
do {
  console.log(`score is ${score}`);
  score++;
} while (score <= 10);
//but eventhough consition is false do while will execute once
