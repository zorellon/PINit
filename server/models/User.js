const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    githubId: String,
    githubName: String
});
module.exports = User = mongoose.model('users', userSchema);