const UserModel = require('../Model/User')

let profilePage = (req, res) => new UserModel().getOneByDocId(req.cookies.token, user => res.render('profile', { user }))

module.exports = { profilePage }