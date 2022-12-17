const express = require ('express');
// const { appendFile } = require('fs');
const router = express.Router();
const user =  require ('../controller/userController')
const validate = require ('../validation/user/userVlaidation')
const blog = require('../controller/userBlog')
const userAuth = require('../middleware/authentication')

router.post('/register',validate.validationSchema,user.userSignUp)
router.post('/login',validate.loginUserValidation,user.userLogin)
router.post('/forgetPassword',user.forgetPassword)
router.get('/myblog/:id',userAuth,blog.userBlog)
router.patch('/update/:id',userAuth,blog.blogUpdate)
router.delete('/delete/:id',userAuth,blog.deleteBlog)

module.exports = router;
