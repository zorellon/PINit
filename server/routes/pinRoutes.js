const _ = require('lodash');
const requireLogin = require('../middlewares/requireLogin');
const express = require('express');
const router = express.Router();

// Load pin and user model
const Pin = require('../models/Pins');
const User = require('../models/User');


    // pass in requireLogin middleware to make sure user is logged in

    // @route   GET api/pin/test
    // @desc    Tests post route
    router.get('/test', (req, res) => res.json({ msg: 'Posts Routes Works' }));


    // @route   GET api/pin/all
    // @desc    get all pins in db
    router.get('/all', (req,res) => {
        Pin.find()
            .sort({dateCreated: -1})
            .then(pins => res.json(pins))
            .catch(err => res.status(404));
    });

    // @route   GET api/pin/:pin_id
    // @desc    get a single pin with pi_id
    router.get('/:pin_id', (req,res) => {
        Pin.find({_id: req.params.pin_id})
            .then(pin => {
                if (pin) {
                    res.json(pin);
                } else {
                    res.status(404).json({ nopostfound: 'No pin found with that _id' })
                }
            })
            .catch(err =>
                res.status(404).json({ nopostfound: 'No pin found with that _id' })
            );   
    });

    // @route   GET api/pin/:pin_id
    // @desc    get all pins by the user with user_id
    router.get('/user/:user_id', (req, res) => {
        Pin.find({pinAuthor: req.params.user_id})
            .then(pin => {
                if (pin) {
                    res.json(pin);
                } else {
                    res.status(404).json({ nopostfound: 'No pins found with that pinAuthor' })
                }
            })
            .catch(err =>
                res.status(404).json({ nopostfound: 'No pins found with that pinAuthor' })
            );
        });


    // @route   DELETE api/pin/delete/:pin_id
    // @desc    delete the pin with pin_id but also check user
    router.delete('/delete/:pin_id',requireLogin, (req, res) => {
          User.findOne({ user: req.user.id })
            .then(_id => {
                Pin.findById(req.params.pin_id)
                    .then(pin => {
                        // Check for pin owner
                        if (pin.pinAuthor.toString() !== req.user.id) {
                        return res
                            .status(401)
                            .json({ notauthorized: 'User not authorized to delete pin' });
                        }
            
                        // Delete
                        pin.remove().then(() => res.json({ success: true }));
                    })
                    .catch(err => res.status(404).json({ postnotfound: 'No pin found' }));
            });
    });
    
    // @route   POST api/pin/delete/:pin_id
    // @desc    creat new pin with data from the form 
    router.post('/new', requireLogin, async(req,res) => {    
        //console.log(req.body);
        const pin = new Pin({
            pinTitle: req.body.pinTitle,
            pinDescription: req.body.pinDescription,
            pinURL: req.body.pinURL,
            //pinShortURL: "/Pin/:pin_id"
            pinAuthor: req.user.id,
            dateCreated: Date.now()
        });
        
        pin.save().then(pin => res.json(pin))
    
    });

module.exports = router;