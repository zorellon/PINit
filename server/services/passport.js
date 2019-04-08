const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

// get cookie value 
passport.serializeUser((user,done) => {
    // user.id is the mongoDB user id 
    done(null, user.id);
});
passport.deserializeUser((id ,done) => {
    // user.id is the mongoDB user id 
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

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
        // return promise
        User.findOne({githubId: profile.id})
            .then((existingUser) => {
                if(existingUser){
                    // a record with this id exists
                    done(null,existingUser);
                }else {
                    // we dont have a user record with this id
                    new User({githubId: profile.id})
                        .save()
                        .then(user => done(null,user));
                }
            });
    }
    )
);
