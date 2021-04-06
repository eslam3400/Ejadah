const UserModel = require('../Model/User')

let loginPage = (req, res) => {
  res.render('login')
}

let login = (req, res) => {
  new UserModel().getOne({ feild: "email", operator: "==", value: req.body.email }, (userId, user) => {
    if (req.body.password == user.password)
      res.cookie('token', userId, { maxAge: 43200000 }).redirect('/')
  })
}

let signup = (req, res) => {
  let user = req.body
  new UserModel().add({ user })
}

let logout = (req, res) => {
  res.clearCookie('token').redirect('/')
}

module.exports = { loginPage, login, signup, logout }