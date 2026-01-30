const clock = document.querySelector("#clock");
//or by id selector document.getElementById("clock")

//I wanna run this time continuosly

//we have a method in javascript
//setInterval controls Events
//let date = new Date(); if you declare this here see what happens is that each time date object is created it caoutures the cuurent time so in loop the object will not get activated hence we have to declare it
setInterval(function () {
  let date = new Date();
  clock.innerText = date.toLocaleTimeString();
}, 1000);
