const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

/* GET home page. */
router.get('/:id', userController.index);

router.get('/:id/about', userController.about);
router.get('/:id/scores', userController.scores);

router.get('/:id/game', userController.game);


module.exports = router;
