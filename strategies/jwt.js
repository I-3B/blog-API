if (!process.env.NODE_ENV) require("dotenv").config();
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../modules/User");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;

module.exports = new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({ email: jwt_payload.email }).exec((err, user) => {
        if (err) return done(null, false);
        return done(null, user);
    });
});
