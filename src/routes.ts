import { Router } from "express";
import multer from "multer";

import { PostController } from "./controller/PostController";

const postController = new PostController();

import uploadsConfig from "./config/multer";

const upload = multer(uploadsConfig);

export const router = Router();

router.post("/", upload.array("images"), postController.store);
