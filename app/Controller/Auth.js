const UserModel = require('../Model/User')

let loginPage = (req, res) => {
  res.render('login', { message: "" })
}

let login = (req, res) => {
  new UserModel().getOne({ feild: "email", operator: "==", value: req.body.email }, (userId, user) => {
    if (user == null)
      res.render('login', { message: "loginError" })
    else if (req.body.password == user.password)
      res.cookie('token', userId, { maxAge: 43200000 }).redirect('/')
    else
      res.render('login', { message: "loginError" })
  })
}

let signupPage = (req, res) => {
  res.render('signup')
}

let signup = (req, res) => {
  let user = {
    "fname": null,
    "lname": null,
    "email": null,
    "password": null,
    "phone": null,
    "role": null,
    "schsStatus": null,
    "idType": null,
    "id": null,
    "nationality": null,
    "dateOfBirth": null,
    "city": null,
    "academicQualification": null,
    "speciality": null,
    "address": null,
    "workPlace": null,
    "enrollments": []
  }
  new UserModel().getOne({ feild: 'email', operator: '==', value: req.body.email }, (docId, data) => {
    if (data) res.redirect("/signup")
    else new UserModel().add(user, () => res.redirect("/login"))
  })
}

let logout = (req, res) => {
  res.clearCookie('token').redirect('/')
}

module.exports = { loginPage, login, signupPage, signup, logout }