const express = require('express');
const router = express.Router();

const { handleGenerateNewShortURL } = require('../controllers/url');

router.post('/' , handleGenerateNewShortURL);

module.exports = router;