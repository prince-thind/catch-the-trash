exports.index = function (req, res, next) {
    res.render('index.ejs')
}
exports.login = function (req, res, next) {
    res.send('login');
}


exports.signin = function (req, res, next) {
    res.send('signin');
}

exports.logout = function (req, res, next) {
    res.send('logout');
}

exports.about = function (req, res, next) {
    res.send('about');
}