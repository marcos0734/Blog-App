const express = require('express')
const router = express.Router();
const blog = require ('../controller/blogcontroller')
const comment = require('../controller/commentController')

router.post('/createblog',blog.createBlog)
router.get('/bloglist',blog.blogList)
router.get('/detail/:id',blog.blogDetail)
router.post('/comment',comment.userComment)
router.get('/like/:id/:status',blog.blogLike)

module.exports = router;