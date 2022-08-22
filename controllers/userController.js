exports.index = function (req, res, next) {
    res.send('user welcome');
}
exports.about = function (req, res, next) {
    res.send('user about');
}

exports.scores = function (req, res, next) {
    res.send('user scores');
}

exports.game = function (req, res, next) {
    res.send('user game');
}