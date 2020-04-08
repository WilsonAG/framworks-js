'use strict';

const express = require('express');
const articleController = require('../controllers/ArticleController');
const router = express.Router();
const multipart = require('connect-multiparty');
const mdUpload = multipart({ uploadDir: './upload/articles' })


router.post('/save', articleController.save);
router.get('/articles/:last?', articleController.getArticles);
router.get('/article/:id', articleController.getArticle);
router.put('/article/:id', articleController.update);
router.delete('/article/:id', articleController.delete);
router.post('/upload-image/:id?', mdUpload, articleController.upload);
router.get('/image/:id', articleController.getImage);
router.get('/search/:token', articleController.search);

module.exports = router;