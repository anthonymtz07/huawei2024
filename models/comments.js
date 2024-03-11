const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comment = new Schema ({
    comment: {
        type:String
    }
},
{
    collection: 'comments'
});

module.exports = mongoose.model('Comment', Comment);
