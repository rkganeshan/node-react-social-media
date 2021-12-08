const express=require("express")
const {getPosts,createPost}=require("../controllers/post")
const {createPostValidator}=require('../validator/index')
const {requireSignin}=require("../controllers/auth")
const {userById}=require("../controllers/user")

const router=express.Router()

router.get('/',getPosts)
router.post('/post/new/:userId',requireSignin,createPost,createPostValidator)


//any routes containing :userId,our app will exec first userById
router.param("userId",userById)

module.exports=router;