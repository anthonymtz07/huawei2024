const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Admin = new Schema ({
    adminname: {
        type:String
    },
    adminlastname: {
        type:String
    },
    adminage:{
        type:Number
    },
    adminphone: {
        type:Number
    },
    adminemail: {
        type:String
    },
    adminpassword: {
        type:String
    },
    adminphoto:{
        data: Buffer,
        type: String
    },
    type:{
        type: String,
        default: 'admin'

    }

},
{
    collection: 'new_admin'
});

module.exports = mongoose.model('Admin', Admin);

