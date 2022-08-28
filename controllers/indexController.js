const User = require('../models/User');
const jwt = require('jsonwebtoken')

exports.index = function (req, res, next) {
    res.render('index.ejs')
}

exports.login_GET = function (req, res, next) {
    res.render('login');
}

exports.login_POST = async function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    const dbUser = await User.findOne({ username, password });
    if (!dbUser) {
        res.sendStatus(404);
    }
    else {
        const token = jwt.sign({ username }, process.env.TOKEN_KEY)
        res.cookie('token', token)
        res.redirect("/game")
    }
}

exports.signup = function (req, res, next) {
    res.render('signup');
}

exports.logout = function (req, res, next) {
    res.send('logout');
}

exports.about = function (req, res, next) {
    res.send('about');
}

exports.game = function (req, res, next) {
    res.send('main game');
}