//Destructuring of Objects

const course = {
  coursename: "js in hindi by hitesh sir",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor we can use alias

const { courseInstructor } = course;

console.log(courseInstructor);
