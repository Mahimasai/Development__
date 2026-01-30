//Immediately Invoked Function Expression (IIFE)

//we need a function that needed to be invoked as soon as available
//and global scope se polluted naa ho aur immmediately execute hoo jaye

// (function chai() {
//   console.log("DB connected");
// })()

//   //Remove global pollution

//   (() => {
//     console.log("DB connected");
//   }
// )()(
//   //we get error

//   function aurcode() {
//     console.log("DB connected");
//   }
// )() //we get error
//Bwcause it knows where the code starts but don't know when to end the instnace so we need thesemicolon

//Remove global pollution

// (function chai() {
//   console.log("DB connected");
// })();

// (function chai() {
//   console.log("DB connected");
// })();

// (() => {
//   console.log("DB connected");
// })();


//27 May to 23 August 