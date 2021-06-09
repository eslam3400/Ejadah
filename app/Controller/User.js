const UserModel = require('../Model/User')
const EnrollmentModel = require('../Model/Enrollment')

class User {

  profile(userId, callback = (userData) => { }) {
    new UserModel().getOneByDocId(userId, user => callback(user))
  }
}

let profile = (req, res) => new User().profile(req.cookies.token, userData => res.render('profile', { userData }))

let enroll = (req, res) => new User().enroll(req.params.courseId, req.params.userId)

module.exports = { profile, enroll }