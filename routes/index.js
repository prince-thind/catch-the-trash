const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const authenticate = require('../middleware/authenticate');

/* GET home page. */
router.get('/', indexController.index);

router.get('/login', indexController.login_GET);
router.post('/login', indexController.login_POST);

router.get('/signup', indexController.signup);
router.get('/logout', indexController.logout);

router.get('/about', indexController.about);

router.get('/game',authenticate, indexController.game);



module.exports = router;
