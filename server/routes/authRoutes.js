const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


// Load pin model
// const Pin = mongoose.model('pins');
// const User = mongoose.model('users');
//const Pin = require('../models/Pins');
const User = require('../models/User');


    // @route   GET /api/auth/test
    // @desc    Tests user route
    router.get('/api/auth/test', (req, res) => res.json({ msg: 'User Routes Works' }));

    // These routes are private (protected with passport)
    // create github authentication route handlers flow
    router.get('/auth/github', 
        passport.authenticate('github'
        ,{
            scope: ['user']
        }
    ));
    // @route   GET /auth/github/callback
    // @desc    github Authorization callback URL
    router.get('/auth/github/callback', 
        passport.authenticate('github'),
        (req,res) => {
            res.redirect('/');
        }
    );
    // @route   GET /api/current_user
    // @desc    User is logged out when directed here
    router.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    // @route   GET /api/current_user
    // @desc    responds with user model if user is logged in
    router.get('/api/current_user', (req, res) => {
        // passport automatically attaches user to req
        res.send(req.user);
    });

module.exports = router;