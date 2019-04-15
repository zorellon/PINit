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
    // app.get('/api/userpins/:user_id', async (req,res) => {
    //     const pins = await Pin.findById({req.user.user_id});
    //     res.send(pins);    
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
            //pinShortURL,
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

    // app.delete('/api/pin/delete', function (req, res) {
    //     res.send('Got a DELETE request at /user')
    // })

    //delete pin with that id
    // app.delete('/api/pin/delete',async(req,res) => {
    //     //console.log(req.params.id);
    //     Pin.findByIdAndRemove({_id: req.params.id});
    //     res.redirect('/');
    // });

    // app.route('/api/pin/delete/:id').get(function (req, res) {
    //     Pin.findByIdAndRemove({_id: req.params.id}, function(err, pin){
    //         if(err) res.json(err);
    //         else res.json('Successfully removed');
    //     });
    // });


};