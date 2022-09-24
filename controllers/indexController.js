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

exports.signup_GET = function (req, res, next) {
    res.render('signup');
}

exports.signup_POST = async function (req, res, next) {
   res.send('todo: implement user creation')
}

exports.logout = function (req, res, next) {
    res.clearCookie('token')
    res.redirect("/");
}

exports.about = function (req, res, next) {
    res.render('about', { title: 'About' });
}

exports.game = function (req, res, next) {
    res.send('main game');
}

exports.profile = function (req, res, next) {
    res.render('profile', { title: res.locals.username + "'s Profile" });
}