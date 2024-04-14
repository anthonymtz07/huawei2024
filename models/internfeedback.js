const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let InterFeedback = new Schema ({
    name: {
        type:String
    },
    lastname:{
        type:String
    },
    comment:{
        type:String
    }
},
{
    collection: 'internFeedback'
});

module.exports = mongoose.model('interFeedback', InterFeedback);