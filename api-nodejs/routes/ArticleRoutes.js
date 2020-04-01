'use strict';

const express = require('express');
const articleController = require('../controllers/ArticleController');
const router = express.Router();


router.get('/test', articleController.data);

module.exports = router;