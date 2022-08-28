const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);

router.get('/login', indexController.login);
router.get('/signup', indexController.signup);
router.get('/logout', indexController.logout);

router.get('/about', indexController.about);


module.exports = router;
