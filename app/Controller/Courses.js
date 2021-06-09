const CourseModel = require('../Model/Course')
const User = require('../Model/User')

let courses = (req, res) => new CourseModel().getAll(null, courses => res.render('courses', { courses }))

let addCourse = (req, res) => new CourseModel().add(req.body, () => res.render(''))

let enroll = (req, res) => {
  new User().getOneByDocId(req.cookies.token, (data) => {
    data.enrollments.push({
      courseId: req.params.courseId,
      enrollmentDate: new Date(),
      certificate: null,
      chosenSchadule: null,
      attendance: []
    })
    new User().update(req.cookies.token, data)
  })
}

// new User().update('KadAKo29tpcgizZT3qea', { comment: null })
new User().getOneByDocId('TplffMGnSGFCPljZ12t9', (data) => {
  data.enrollments.push({
    courseId: "1",
    enrollmentDate: new Date(),
    certificate: null,
    chosenSchadule: null,
    attendance: []
  })
  new User().update('TplffMGnSGFCPljZ12t9', data)
})
module.exports = { courses }