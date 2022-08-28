const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = function authenticate(req, res, next) {
    const token = req.cookies["token"];
    if (!token) {
        return res.redirect("/login")
    }
    jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
        if (err) {
            next(err)
        }
        else {
            const cookieUser = data.username;
            User.findOne({ username: cookieUser }, (err, dbUser) => {
                if (err) next(err);
                if (dbUser) {
                    next();
                }
                else {
                    res.redirect("/login")
                }
            });

        }
    })
}