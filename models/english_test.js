const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let English_test = new Schema ({
    answer1: {
        type:String
    },
    answer2:{
        type:String
    },
    answer3:{
        type:String
    },
    answer4:{
        type:String
    },
    answer5: {
        type:String
    },
    answer6:{
        type:String
    },
    answer7:{
        type:String
    },
    answer8:{
        type:String
    },
    answer9:{
        type:String
    },
    answer10:{
        type:String
    },
    studentemail:{
        type:String
    }

},
{
    collection: 'english_test'
});

module.exports = mongoose.model('English_test', English_test);