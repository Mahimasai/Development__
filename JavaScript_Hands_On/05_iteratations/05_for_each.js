const coding = ["js", "rb", "py", "java"];

// coding.forEach(function (value) {
//   console.log(value);
// });
//output
// js
// rb
// py
// java

//coding.forEach( (value) => { console.log(value) } )

// coding.forEach((value) => {
//   console.log(value);
// });

// function printMe(value) {
//   console.log(value);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });
// //output
// // js 0 [ 'js', 'rb', 'py', 'java' ]
// // rb 1 [ 'js', 'rb', 'py', 'java' ]
// // py 2 [ 'js', 'rb', 'py', 'java' ]
// // java 3 [ 'js', 'rb', 'py', 'java' ]

// coding.forEach(function greeting(item, index, arr) {
//   console.log(item, index, arr);
// });
// //output
// // js 0 [ 'js', 'rb', 'py', 'java' ]
// // rb 1 [ 'js', 'rb', 'py', 'java' ]
// // py 2 [ 'js', 'rb', 'py', 'java' ]
// // java 3 [ 'js', 'rb', 'py', 'java' ]

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
];

// myCoding.forEach((item) => {
//   console.log(item.languageName);
// });

// for (const item of myCoding) {
//   console.log(item.languageName);
// }

// for (const key in myCoding) {
//   console.log(myCoding[key]);
// }
//both for of and for can be  used for [{},{},{}]
