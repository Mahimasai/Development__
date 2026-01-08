//Destructuring of Objects

const course = {
  coursename: "js in hindi by hitesh sir",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor we can use alias

const { courseInstructor } = course;

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
// console.log(instructor);// Here instead of the full Name we can use the alias

//wE TALK ABOUT THE API
//API is the application programming interface

//Like we ask services through the API
//Like menu card we order services we get the values in the xml previously now we get the values mostly in json

// {
//     name:"saime",
//     courseName:"js in hindi by hitesh sir",
//     price:"999"
// }//Without the variable it will be treated as json

//Sometimes we might also get the values in the array
