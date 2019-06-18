const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    postCount: Number
});

//user is created if it does not exist
//user collection must follow UserSchema
const User = mongoose.model('user', UserSchema); //represents the entire collection of data

module.exports = User;