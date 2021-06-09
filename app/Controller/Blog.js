const Blog = require('../Model/Blog')

let blogPage = (req, res) => {
  new Blog().getAll(null, data => {
    console.log(data)
    res.render('blog', { data })
  })
}

let addBlog = (req, res) => {
  console.log(req.body)
  new Blog().add(req.body)
}

// new Blog().add({
//   title: 'blog1',
//   data: new Date(),
//   pic: "blog2Img",
//   content: "hello to my second blog",
//   comments: [{
//     date: new Date,
//     userId: "user2",
//     content: "comment 1"
//   }]
// })
// new Blog().getAll(null, data => {
//   console.log(data)
// })