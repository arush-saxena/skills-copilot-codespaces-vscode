// Create web server 

// Import modules

const express = require('express');

const router = express.Router();

const commentController = require('../controllers/commentController');

// Create routes

router.get('/', commentController.getAllComments);

router.get('/:id', commentController.getCommentById);
