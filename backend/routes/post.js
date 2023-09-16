import Express  from "express";
import {getPosts, createPost, updatePost} from "../controller/post.js";

const router= Express.Router();

router.get("/",getPosts);
router.post("/",createPost);
router.patch('/:id',updatePost);

export default router;