const Student = require("./student");
const IdentityCard = require("./identityCard");
const Department = require("./department");
const courses = require("./courses");
const studentCourses  =require("./studentCourses");


//one to one
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//one to many
Department.hasMany(Student);
Student.belongsTo(Department);

//many to many
Student.belongsToMany(courses,{through:studentCourses});
courses.belongsToMany(Student,{through:studentCourses});


module.exports = {
    Student,
    IdentityCard,
    Department,
    courses,
    studentCourses
}