const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Pin = mongoose.model('pins');

module.exports = (app) => {

    // get all pins in db
    app.get('/api/pins', async(req,res) => {
        const pins = await Pin.find({});
        res.send(pins);
    });

    //get all pins by a user
    app.get('/api/pin/:id' ,async (req,res) => {
        const pins = await Pin.findById({pinAuthor: req.id});
        res.send(pins);    
    });

    //get all pins by the current user
    app.get('/api/mypins' ,requireLogin,async(req,res) => {
        const pins = await Pin.find({pinAuthor: req.user.id});
        res.send(pins);
    });

    
    // pass in requireLogin middleware to make sure user is logged in
    app.post('/api/pin/new2', requireLogin, async(req,res) => {
        const{pinTitle,pinDescription,pinURL} = req.body;

        const pin = new Pin({
            pinTitle,
            pinDescription,
            pinURL,
            //pinShortURL,
            pinAuthor: req.user.id,
            dateCreated: Date.now()
        });
        
        try{
            await res.send(pin);
            await pin.save();
            //await res.redirect('/');
        }
        catch (err){
            res.status(422).send('adding pin failed')
        }

    });

};