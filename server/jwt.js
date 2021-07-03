const expressJwt = require('express-jwt');
const projectConfig = require('./config');
const User = require('./models/user.model');

function jwt() {
    return expressJwt({ secret: projectConfig.jwtSecret, algorithms: ['HS256'], isRevoked: isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/favicon.ico',
            '/api/users/login',
            '/api/insurance/new',
        ]
    });
}

function isRevoked(req, payload, done) {
    console.log(payload.email);
    User.find({ email: payload.email }, (err, result) => {
        if (err) return done(err);
        if (!result) { return done(new Error('missing_secret')); }
        return done(false, null);
        //return done(false, projectConfig.jwtSecret);
    });
};

module.exports = jwt;