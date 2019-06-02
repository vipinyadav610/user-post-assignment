import express from "express";
import middleware from "./middleware";
import { GetPosts } from "./controller/posts/posts.controller";
const app = express();
middleware(app);
app.get("/posts", GetPosts);

export default app;
