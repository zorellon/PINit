
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const pinRoutes = require('./routes/pinRoutes');
//const pinRoutes = express.Router();
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport =require('passport');
require('./models/Pins'); 
require('./models/User'); // must be declared before services/passport
// import passport 
require('./services/passport');

// connect to Mongo DB
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);
const connection = mongoose.connection;
connection.once('open', function(){
    console.log("MongoDB connection was successfull");
})

// create express application
const app = express();

// middleware for parsing and cookies session
app.use(bodyParser.json());
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

// pass app to Routes files
authRoutes(app);
pinRoutes(app);


// the port will be dynamically made by Heroku in produrtion
// OR 5000 for development
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    if (err){
        console.log(err);
    }
    console.log('Listening on port: ' + PORT);
});