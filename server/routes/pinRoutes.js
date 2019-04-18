const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Pin = mongoose.model('pins');

module.exports = (app) => {

    // get all pins in db
    app.get('/api/pins', async(req,res) => {
        const pins = await Pin.find({});
        //res.send('Hello World');
        res.send(pins);
    });

    //get a single pin
    // app.get('/api/pins/:pin_id', async (req,res) => {
    //     const pin = await Pin.findById({req.pin.pin_id});
    //     res.send(pin);    
    // });



    //get all pins by the current user
    app.get('/api/mypins', requireLogin,async(req,res) => {
        const pins = await Pin.find({pinAuthor: req.user.id});
        res.send(pins);
    });


    app.get('/api/userpins/:id', function(req, res) {
        Pin.find({pinAuthor: req.params.id}, function(err, pin) {
            if (err)
                res.send(err);
            res.json(pin);
        });
    });

    app.delete('/api/pin/delete/:pin_id', function(req, res) {
        Pin.findOneAndDelete({_id: req.params.pin_id}, function(err, pin) {
            if (err)
                res.send(err);

            res.json(pin);
                //res.json({ message: 'Successfully deleted' });
                //res.redirect('/');
            
        });
    });
    

    // pass in requireLogin middleware to make sure user is logged in
    app.post('/api/pin/new', requireLogin, async(req,res) => {    
        console.log(req.body);
        const pin = new Pin({
            pinTitle: req.body.pinTitle,
            pinDescription: req.body.pinDescription,
            pinURL: req.body.pinURL,
            //pinShortURL: "/api/pin/:pin_id"
            pinAuthor: req.user.id,
            dateCreated: Date.now()
        });
        
        try{
            await res.send(pin);
            await pin.save();
            //res.json({ message: 'Pin created!' });
        }
        catch (err){
            res.status(422).send(err);
        }
    
    });

};