const mongoose = require('mongoose');
const { Schema } = mongoose;

const pinSchema = new Schema({
    pinTitle: String,
    pinDescription: String,
    pinURL: String,
    //pinShortURL: String,
    pinAuthor: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    dateCreated: Date
});

module.exports = Pin = mongoose.model('pins', pinSchema);