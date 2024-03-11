const express = require('express');
const mongodb = express.Router();

let Student = require('../models/student');
let Comment = require('../models/comments')

/*Students*/

mongodb.post('/student_information',(req,res)=>{
    Student.create(req.body).then((data)=>{
        console.log("Student added...");
        console.log(data);
        res.send(data)
    })
    .catch((err)=>{
        console.error("check this information: "+err);
    });
});



/*Comments*/
mongodb.post('/comments',(req,res)=>{
    Comment.create(req.body).then((data)=>{
        console.log("Comment added...\n["+data+"]");
        console.log(data);
        res.send(data);
        //res.redirect('/');
    })
    .catch((err)=>{
        console.error("Check this information: "+err);
    })
});


/*
rute.get('/intership',(req,res)=>{
    res.render('internship')
});
*/

module.exports = mongodb;