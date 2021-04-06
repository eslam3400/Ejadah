const UserModel = require('../Model/User')

let auth = (req, res, next) => {
  if (req.cookies.token == undefined || req.cookies.token == null) res.redirect('/')
  else new UserModel().getOneByDocId(req.cookies.token, data => {
    if (data.role == 'admin') next()
    else res.redirect('/')
  })
}

module.exports = { auth }