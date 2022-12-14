import Express from "express";
import postsController from "../controllers/posts.controller.js";

const router = Express.Router()

router.post('/', postsController.newPost)
router.get('/', postsController.getPosts)
router.post('/comentario', postsController.newComment)

export default router