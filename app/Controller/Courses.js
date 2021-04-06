const CourseModel = require('../Model/Course')

let coursesPage = (req, res) => new CourseModel().getAll(null, courses => res.render('courses', { courses }))