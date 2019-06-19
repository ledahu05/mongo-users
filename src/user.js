const mongoose = require('mongoose');
const PostSchema = require('./posts');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 2,
            message: 'Name must be longer than 2 characters.'
        },
        required: [true, 'Name is required.']
    },
    postCount: Number,
    posts: [PostSchema]
});

//user is created if it does not exist
//user collection must follow UserSchema
const User = mongoose.model('user', UserSchema); //represents the entire collection of data

module.exports = User;