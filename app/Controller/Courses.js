const CourseModel = require('../Model/Course')

let courses = (req, res) => new CourseModel().getAll(null, courses => res.render('courses', { courses }))

module.exports = { courses }