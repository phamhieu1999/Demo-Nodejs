const express = require('express');
const router = express.Router();
const postApi = require('../controller/callApi')

// pull and save 
router.post('/',postApi)
module.exports = router;