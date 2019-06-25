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
    likes: Number,
    posts: [PostSchema],
    blogPosts:[{
        type: Schema.Types.ObjectId,
        ref: 'blogPost'
    }]
});

UserSchema.virtual('postCount').get(function(next) {
    return this.posts.length;
});

UserSchema.pre('remove', function(next) {
    const BlogPost = mongoose.model('blogPost');
    //this === joe
    BlogPost.remove({ _id: { $in: this.blogPosts }})
        .then(() => next());
});

//user is created if it does not exist
//user collection must follow UserSchema
const User = mongoose.model('user', UserSchema); //represents the entire collection of data

module.exports = User;