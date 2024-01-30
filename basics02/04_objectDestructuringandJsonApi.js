const course = {
    courseName: "JavaScript",
    coursePrice: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);

// here we are destructuring object by this we can use course.courseInstructor as only instructor
// const { courseInstructor } = course;
const { courseInstructor: instructor } = course;
console.log(instructor)



// Json file format
// {
// "name": "harsh",
// "number": 5635436
// }

// Json file format
// [
//     {},
//     {},
//     {}
// ]