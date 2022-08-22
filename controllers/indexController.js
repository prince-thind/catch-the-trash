exports.index = function (req, res, next) {
    res.send('welcome');
}
exports.login = function (req, res, next) {
    res.send('login');
}

exports.logout = function (req, res, next) {
    res.send('logout');
}

exports.about = function (req, res, next) {
    res.send('about');
}