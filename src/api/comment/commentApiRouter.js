const express = require('express');
const router = express.Router();
const commentController = require("../../components/comment/commentController");

// GET Method
router.get('/:id/comments', commentController.getComment);

// POST Method
router.post('/:id/comments', commentController.postComment);

module.exports = router;