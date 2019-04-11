const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

//const Pin = mongoose.model('pins');

module.exports = (app) => {

    // get all pins in db
    app.get('/api/pins', async(req,res) => {
        Pin.find(function(err,pins){
            if (err){
                console.log(err);
            }else{
                res.json(pins)
            }
        });
    });

    // get all pins by a user
    // app.get('/api/pin/:id' ,(req,res) => {
    //     const id = req.params.id;
    //     Pin.findById(id,function(err,pins){
    //         if (err){
    //             console.log(err);
    //         }else{
    //             res.json(pins)
    //         }
    //     });
    // });

    // pass in requireLogin middleware to make sure user is logged in
    app.post('/api/pin/new', requireLogin, async(req,res) => {
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
        }
        catch (err){
            res.status(422).send('adding pin failed')
        }

    });

};