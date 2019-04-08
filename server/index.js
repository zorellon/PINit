// import express
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport =require('passport');
require('./models/User'); // must be declared before services/passport

// import passport 
require('./services/passport');

// connect to Mongo DB
mongoose.connect(keys.mongoURI);

// create express application
const app = express();

// Middleware for cookies session
app.use(
    cookieSession({
        // cookies last 30 days
        maxAge: 30 * 24 * 30 * 60 * 1000,
        // hidden in keys.js
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// pass app to authRoutes file
authRoutes(app);

// the port will be dynamically made by Heroku in produrtion
// OR 5000 for development
const PORT = process.env.PORT || 5000;
app.listen(PORT);