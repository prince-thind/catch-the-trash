const User = require('../models/User');

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
        res.send('you exist');
    }
}

exports.signup = function (req, res, next) {
    res.render('signin');
}

exports.logout = function (req, res, next) {
    res.send('logout');
}

exports.about = function (req, res, next) {
    res.send('about');
}