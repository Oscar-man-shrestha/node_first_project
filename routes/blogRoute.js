const { renderhome, signup, signUp, blogPost } = require("../controller/blogController")
const router = require('express').Router()



router.route('/').get(renderhome)


router.route('/signUp').get(signUp).post(signup)


router.route('/blogPosts').get(blogPost)


module.exports=router