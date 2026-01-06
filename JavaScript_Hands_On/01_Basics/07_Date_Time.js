//Dates

let myDate = new Date();

console.log(myDate); //Here we get something like 2026-01-06T08:52:19.000Z
//But we want to get the date in a more readable format
console.log(myDate.toString()); //Here we get something like Mon Jan 06 2026 10:22:30 GMT+0530 (India Standard Time) My time presently 😁😅😅
console.log(myDate.toDateString()); //we get only the date like Mon Jan 06 2026
console.log(myDate.toLocaleString()); //Here we get something like 1/6/2026, 10:22:30 AM
console.log(typeof myDate); //Its an Object pretty obvious we creted an instanece right

let myCreatedDate = new Date(2023, 0, 23);

console.log(myCreatedDate.toString()); //here we get something like Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)

//Did you notice something the months starts from o and also it gave the date by itslef
//Another Format

let mynewCreatedDate = new Date("2023-01-14"); //here ddmmyy month starts with 1
//we can also use mmddyy

//Timestamp

let myTimeStamp = Date.now();

console.log(myTimeStamp); //Outputs the time in milliseconds from 1 Jan 1970

//Compare the DaTES

console.log(myCreatedDate.getTime()); //Here we get the millisecond value to this date

// So we can compre the Dates

//Convert to Seconds

console.log(Math.floor(Date.now() / 1000));

let NewDate = new Date();
console.log(NewDate);
console.log(NewDate.getMonth()); // here we get output as 0 because the months start from 0
console.log(NewDate.getDate()); //here we get the date as 6
console.log(NewDate.getDay()); //Here we get the day as 1 if it is monday

console.log(
  `${Date.now().getDay()}---${Date.now().getMonth()}---${Date.now().getFullYear()}`
); //here output is like 1---0---2026

NewDate.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "Asia/Kolkata",
}); //here weekday mon ===> monday
//Here the local String is the Object and also we can do many changes and can get in many format

//Date and time is slightly trciky we will get familar as we use it in our projects
