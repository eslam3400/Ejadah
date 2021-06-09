const CourseModel = require('../Model/Course')
const User = require('../Model/User')

let courses = (req, res) => new CourseModel().getAll(null, coursesData => res.render('courses', { courses: coursesData }))

let addCourse = (req, res) => {
  let course = {
    "title": null,
    "prefDescription": null,
    "lessons": null,
    "requirments": null,
    "description": null,
    "reviews": [],
    "seats": null,
    "available_seats": null,
    "numberOfSessions": null,
    "schadule": []
  }
  new CourseModel().add(course, () => res.render(''))
}

let addCourseReview = () => {
  new CourseModel().getOneByDocId(req.cookies.token, (data) => {
    data.reviews.push({
      "userId": null,
      "date": null,
      "commnet": null,
      "rate": null
    })
    new CourseModel().update(req.cookies.token, data, () => res.redirect('/'))
  })
}

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
// new User().getOneByDocId('TplffMGnSGFCPljZ12t9', (data) => {
//   data.enrollments.push({
//     courseId: "1",
//     enrollmentDate: new Date(),
//     certificate: null,
//     chosenSchadule: null,
//     attendance: []
//   })
//   new User().update('TplffMGnSGFCPljZ12t9', data)
// })
module.exports = { courses }