const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
//import middleware
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport =require('passport');
const cors = require('cors');
//import models
require('./models/Pins'); // must be declared before services/passport
require('./models/User'); // must be declared before services/passport
// import passport 
require('./services/passport');

// connect to Mongo DB
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

// const connection = mongoose.connection;
// connection.once('open', function(){
//     console.log("MongoDB connection was successfull");
// })


// define our app using express
const app = express();

// middleware for parsing .body and cookies session
app.use(cors());
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


// test route
app.get('/api/test', function(req, res) {
    res.json({ message: 'The API is active TEST' });   
});


// pass app to Routes files
const authRoutes = require('./routes/authRoutes');
const pinRoutes = require('./routes/pinRoutes');
authRoutes(app);
pinRoutes(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets like our main.js file
    app.use(express.static('client/build'));
    // Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// the port will be dynamically made by Heroku in produrtion
// OR 5000 for development
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    if (err){
        console.log(err);
    }
    console.log('Listening on port: ' + PORT);
});