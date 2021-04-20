const CourseModel = require('../Model/Course')

class Course {
}

let courses = (req, res) => new CourseModel().getAll(null, courses => res.render('courses', { courses }))

module.exports = { courses }