import Express  from "express";
import {getPosts, createPost} from "../controller/post.js";

const router= Express.Router();

router.get("/",getPosts);
router.post("/",createPost);

export default router;