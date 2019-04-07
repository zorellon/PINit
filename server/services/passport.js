const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;
const keys = require('../config/keys');

// setting up new gitub authentication strategy with client id and client secret 
passport.use(
    new GithubStrategy({
        clientID: keys.githubClientID,
        clientSecret: keys.githubClientSecret,
        callbackURL: 'http://localhost:5000/auth/github/callback'
    },
    // from documentation
    // function(accessToken, refreshToken, profile, cb) {
    //   User.findOrCreate({ githubId: profile.id }, function (err, user) {
    //     return cb(err, user);
    //   });
    // }

    (accessToken, refreshToken, profile, done) => {
        //done(null, profile)
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        //console.log(cb);
    }
    )
);

