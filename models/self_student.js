const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student_description = new Schema ({
    studentemail: {
        type:String
    },
    yourself: {
        type:String
    },
    razons:{
        type:String
    },
    goals: {
        type:String
    }

},
{
    collection: 'student_description'
});

module.exports = mongoose.model('Student_description', Student_description);

