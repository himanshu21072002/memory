import Express  from "express";
import {getPosts, createPost, updatePost,deletePost,likePost} from "../controller/post.js";

const router= Express.Router();
import auth from "../middleware/auth.js";

router.get("/",getPosts);
router.post("/",auth,createPost);
router.patch('/:id',auth,updatePost);
router.delete('/:id',auth,deletePost);
router.patch('/:id/likePost',auth,likePost);


export default router;