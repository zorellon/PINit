const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    githubId: String,
    githubName: String
});

mongoose.model('users', userSchema);