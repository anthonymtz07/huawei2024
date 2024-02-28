const express = require('express');
const mongodb = express.Router();

let Student = require('../models/student');

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

/*
rute.get('/intership',(req,res)=>{
    res.render('internship')
});
*/

module.exports = mongodb;