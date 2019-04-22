const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
//import middleware
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport =require('passport');
const cors = require('cors');
const path = require('path');

// pass app to Routes files
const authRoutes = require('./routes/authRoutes');
const pinRoutes = require('./routes/pinRoutes');


// define our app using express
const app = express();

// connect to Mongo DB
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI,{ useNewUrlParser: true });

// connection.once('open', function(){
//     console.log("MongoDB connection was successfull");

// middleware for parsing .body and cookies session
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cookieSession({
        // cookies last 7 days
        maxAge: 7 * 24 * 30 * 60 * 1000,
        // hidden in keys.js
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// import passport 
require('./services/passport');
// require('./services/passport')(passport);


// Use Routes
app.use('/api/pin', pinRoutes);
app.use('', authRoutes);


// Server static assets if in production
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