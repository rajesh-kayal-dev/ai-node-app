const express = require('express');
const router = express.Router();
const generatedContent = require('../controller/contentController');

router.post('/generate', generatedContent);

module.exports = router;