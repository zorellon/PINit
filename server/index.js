// import express
const express = require('express');
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;
const keys = require('./config/keys');

// create express application
const app = express();

// create test route handler
// app.get('/', (req,res) => {
//     res.send({test: 'tested'});
// });

// setting up new gitub authentication strategy with client id and client secret 
passport.use(
    new GithubStrategy({
        clientID: keys.githubClientID,
        clientSecret: keys.githubClientSecret,
        callbackURL: '/auth/github/callback'
    },
    // from documentation
    // function(accessToken, refreshToken, profile, cb) {
    //   User.findOrCreate({ githubId: profile.id }, function (err, user) {
    //     return cb(err, user);
    //   });
    // }
    (accessToken, refreshToken, profile, cb) => {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        console.log(cb);
    }
    )
);

// create github authentication route handler
app.get('/auth/github', passport.authenticate(
    'github'
    ,{
        scope: ['profile', 'email']
    }
));

// 
app.get('/auth/github/callback', 
  passport.authenticate('github')
);

// the port will be dynamically made by Heroku in produrtion
// OR 5000 for development
const PORT = process.env.PORT || 5000;
app.listen(PORT);