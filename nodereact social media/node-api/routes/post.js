const express=require("express")
const {getPosts,createPost,postsByUser,postById,isPoster,deletePost,updatePost}=require("../controllers/post")
const {createPostValidator}=require('../validator/index')
const {requireSignin}=require("../controllers/auth")
const {userById}=require("../controllers/user")

const router=express.Router()

router.get('/posts',getPosts)
router.post('/post/new/:userId',requireSignin,createPost,createPostValidator)
router.get("/posts/by/:userId",requireSignin,postsByUser);
router.delete("/post/:postId",requireSignin,isPoster,deletePost)
router.put("/post/:postId",requireSignin,isPoster,updatePost)


//any routes containing :userId,our app will exec first userById
router.param("userId",userById)
//any routes containing :postId,our app will exec first postById
router.param("postId",postById)
module.exports=router;