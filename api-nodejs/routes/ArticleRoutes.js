'use strict';

const express = require('express');
const articleController = require('../controllers/ArticleController');
const router = express.Router();


router.post('/save', articleController.save)

module.exports = router;