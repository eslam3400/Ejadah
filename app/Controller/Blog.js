const Blog = require('../Model/Blog')

let blogPage = (req, res) => new Blog().getAll(null, data => res.render('blog', { data }))

let addBlog = (req, res) => {
  let blog = {
    "title": null,
    "date": null,
    "pic": null,
    "content": null,
    "comments": []
  }
  new Blog().add(blog, () => res.redirect('/'))
}

let addBlogComment = (req, res) => {
  new Blog().getOneByDocId(req.params.blog, data => {
    data.comments.push({
      "date": null,
      "userId": null,
      "content": null
    })
    new Blog().update(req.cookies.token, data, () => res.render('/'))
  })
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