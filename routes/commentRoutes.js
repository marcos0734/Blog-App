const express = ('express')
const router = express.Router();
const comment = require('../controller/commentController')
const userAuth = require('../middleware/authentication')

router.post('/comment',userAuth,comment.userComment)

module.exports = router