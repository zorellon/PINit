// import express
const express = require('express');
// import passport 
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
//const passport = require('passport');


// create express application
const app = express();

authRoutes(app);

// create test route handler
// app.get('/', (req,res) => {
//     res.send({test: 'tested'});
// });

// the port will be dynamically made by Heroku in produrtion
// OR 5000 for development
const PORT = process.env.PORT || 5000;
app.listen(PORT);