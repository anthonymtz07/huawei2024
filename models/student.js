const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema ({
    studentname: {
        type:String
    },
    studentlastname: {
        type:String
    },
    studentage:{
        type:Number
    },
    studentphone: {
        type:Number
    },
    studentemail: {
        type:String
    },
    studentcareer: {
        type:String
    },
    startyearcareer: {
        type:Date
    },
    endyearcareer: {
        type: Date
    },
    studentuniversity: {
        type: String
    },
    studentlevel: {
        type: Number
    },
    englishlevel: {
        type: String
    }
},
{
    collection: 'new_students'
});

module.exports = mongoose.model('Student', Student);

