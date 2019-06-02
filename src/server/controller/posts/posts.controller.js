const fetch = require("node-fetch");

/**
 * @swagger
 * /posts:
 *   get:
 *     tags:
 *       - posts
 *     description: Returns all posts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of posts
 *         schema:
 *           $ref: '#/definitions/posts'
 */

export const GetPosts = async (req, res) => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    res => res.json()
  );
  res.json(posts);
};
