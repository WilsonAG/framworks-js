'use strict';

const express = require('express');
const articleController = require('../controllers/ArticleController');
const router = express.Router();


router.post('/save', articleController.save);
router.get('/articles/:last?', articleController.getArticles);
router.get('/article/:id', articleController.getArticle);
router.put('/article/:id', articleController.update);
router.delete('/article/:id', articleController.delete);

module.exports = router;