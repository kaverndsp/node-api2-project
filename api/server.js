const express = require('express');

const postsRouter = require('../posts/posts-router.js');
// const commentsRouter = require("../comments/comments-router");

const server = express();

server.use(express.json());

// server.get('/', (req, res) => {
// res.status(200).json('Hello!');
//   });

server.use('/api/posts', postsRouter);
// server.use('/api/posts', commentsRouter);

module.exports = server;