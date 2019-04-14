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

    //get all pins by a user
    app.get('/api/pin/:id', async (req,res) => {
        const pins = await Pin.findById({pinAuthor: req.user.id});
        res.send(pins);    
    });

    //get all pins by the current user
    app.get('/api/mypins', requireLogin,async(req,res) => {
        const pins = await Pin.find({pinAuthor: req.user.id});
        res.send(pins);
    });

    // pass in requireLogin middleware to make sure user is logged in
    app.post('/api/pin/new', requireLogin, async(req,res) => {    
        console.log(req.body);
        const pin = new Pin({
            pinTitle: req.body.pinTitle,
            pinDescription: req.body.pinDescription,
            pinURL: req.body.pinURL,
            //pinShortURL,
            pinAuthor: req.user.id,
            dateCreated: Date.now()
        });
        
        try{
            await res.send(pin);
            await pin.save();
        }
        catch (err){
            res.status(422).send(err);
        }
    
    });

    //delete pin with that id
    app.delete('/api/pin/delete/:id',(req,res) => {
        //console.log(req.params.id);
        Pin.findByIdAndRemove({_id: req.params.id});
        res.redirect('/');
    });


};