let dashboard = (req, res) => res.render('dashboard', { tab: "dashboard" })

let users = (req, res) => res.render('users', { tab: "users" })

module.exports = { dashboard, users }