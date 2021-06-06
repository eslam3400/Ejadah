const UserModel = require('../Model/User')

class Dashboard {

  dashboard(resObj) {
    resObj.render('dashboard', { tab: "dashboard" })
  }

  users(resObj) {
    new UserModel().getAll({}, usersData => {
      resObj.render('users', { tab: "users", usersData })
    })
  }
}

let dashboard = (req, res) => new Dashboard().dashboard(res)

let users = (req, res) => new Dashboard().users(res)

module.exports = { dashboard, users }