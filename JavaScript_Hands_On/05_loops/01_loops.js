//for
arr = [1, 2, 3, 4, 45, 5, 0];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

//nested loops

//example of nested loops

for (let index = 0; index < 3; index++) {
  console.log(index);
  for (let j = 0; j < 3; j++) {
    console.log(`value of j is ${j}`);
  }
}
//continue example
for (let index = 0; index < 3; index++) {
  if (index === 2) {
    continue;
  }
  console.log(index);
}
