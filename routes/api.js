const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

/* GET home page. */
router.get('/highscore', apiController.highscore_GET);

router.post('/highscore', apiController.highscore_POST);

module.exports = router;
