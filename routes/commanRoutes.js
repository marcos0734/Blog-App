const express = require ('express');
const router = express.Router();
const userRouter = require('./userRoutes')
const blogRouter = require('./blogRoutes')


router.use ('/user',userRouter)
router.use ('/blog',blogRouter)
module.exports = router;